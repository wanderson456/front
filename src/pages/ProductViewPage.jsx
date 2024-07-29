import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductContext } from '../context/ProductContext'; 
import ProductListing from '../components/ProductListing';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color:  #F9F8FE; 
  width: 100%;
  box-sizing: border-box; 

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
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
