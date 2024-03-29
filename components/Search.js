import { resetIdCounter, useCombobox } from "downshift";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/client";
import debounce from "lodash.debounce";
import { DropDown, DropDownItem, SearchComponent } from './styles/DropDown';
import { useRouter } from "next/dist/client/router";

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
  const router = useRouter();
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: "no-cache",
    }
  );

  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(findItems, 350);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/product/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item?.name || "",
  });

  return (
    <SearchComponent>
      <div {...getComboboxProps()} className="search-input-container">
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search',
            id: 'search',
            className: loading ? 'loading' : '',
          })}
        />
      </div>
      <DropDown {...getMenuProps()} isOpen={isOpen}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item.id}
              {...getItemProps({ item: item })}
              highlighted={index === highlightedIndex}
              href={`/product/${item.id}`}>
              <img
                src={item.photo?.image.publicUrlTransformed}
                alt={item.name}
                width="50"
              />
              {item.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchComponent>
  );
}
