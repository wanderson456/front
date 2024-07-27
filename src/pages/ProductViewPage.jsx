// src/pages/ProductViewPage.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductContext } from '../context/ProductContext';
import Gallery from '../components/Gallery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <Container>
      <Gallery images={product.images} width="400px" height="400px" showThumbs />
      {/* Você pode incluir outros componentes como ProductOptions e BuyBox aqui */}
    </Container>
  );
};

export default ProductDetails;
