
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../context/ProductContext'; 
import ProductListing from '../components/ProductListing';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ProductViewPage = () => {
  const { products } = useContext(ProductContext); 

  return (
    <Container>
      <ProductListing products={products} />
    </Container>
  );
};

export default ProductViewPage;
