import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';
import Router from 'next/router';
import DisplayError from './ErrorMessage';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { formatCentsToDollars, formatDollarsToCents } from '../lib/formatMoney';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int!
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  // 1. we need to get the existing product

  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  const productData = {
    ...data?.Product,
    price: formatCentsToDollars(data.Product.price).substring(1),
  };

  const { inputs, handleChange, clearForm, resetForm } = useForm(
    productData || {
      name: '',
      description: '',
      price: 0,
    }
  );

  // 2. we need to get the mutation to update the product

  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  // 2.5 create some state for the form inputs

  if (loading) return <p>Loading...</p>;
  // 3. we need the form to handle the udpates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateProduct({
          variables: {
            id,
            name: inputs.name,
            description: inputs.description,
            price: formatDollarsToCents(inputs.price),
          },
        })
          .then((res) => {
            console.log(res);
            clearForm();
            // Go to that product's page
            Router.push({
              pathname: `/product/${res.data?.updateProduct.id}`,
            });
          })
          .catch((error) => console.error);
      }}>
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={loading}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
            steps="any"
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="textarea"
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  );
}
