import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/client';
import Router from 'next/router';
import DisplayError from './ErrorMessage';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import { useState } from 'react';
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
  const [decimalError, setDecimalError] = useState({
    message: '',
  });

  // get existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  const productData = {
    ...data?.Product,
    price: formatCentsToDollars(data?.Product.price).substring(1),
  };

  //insert into form
  const { inputs, handleChange, clearForm, resetForm } = useForm(
    productData || {
      name: '',
      description: '',
      price: 0,
    }
  );

  // update product mutation
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  if (loading) return <p>Loading...</p>;

  // prevent more than 2 decimal places
  function validateDecimal(e) {
    let number = e.target.value;
    if (number.split('.')[1]?.length > 2) {
      setDecimalError({ message: 'Please limit price to 2 decimal places' });
    } else {
      setDecimalError({ message: '' });
    }
  }

  // validate decimal separately outside of handleChange function
  function handlePriceChange(e) {
    handleChange(e);
    validateDecimal(e);
  }

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
      <DisplayError error={error || updateError || decimalError} />
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
            onChange={handlePriceChange}
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

        <button type="submit" disabled={decimalError.message ? true : false}>
          Update Product
        </button>
      </fieldset>
    </Form>
  );
}
