import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, //tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;
      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      // first thing it does it ask the read function for those items

      // check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // if there are items
      // and there arent enough items to satisfy how many were requested
      // and we are on the last page
      // then just send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        //we dont have any items, must go to the network to fetch them
        return false;
      }

      // if there are items, return them from the cache, no need to go to the network
      if (items.length) {
        return items;
      }
      //feedback to network
      return false;
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // here we can either do one of two things, first thing we can do is return the items because they are already in the cache
      // the other thing we can do is to return false from here, (network request )
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; i++) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
