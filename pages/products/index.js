import { useRouter } from 'next/dist/client/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';
import ProductsGroupStyles from '../../components/styles/ProductsGroupStyles';

export default function ProductPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <ProductsGroupStyles>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </ProductsGroupStyles>
  );
}
