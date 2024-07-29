// src/components/ProductListing.jsx
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 45px; /* Ajuste o espaçamento entre os itens */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px;
  background-color: #F9F8FE; /* Cor de fundo para a área de listagem */
`;

const ProductListing = ({ products }) => {
  // Adicionamos a porcentagem de desconto a cada produto
  const productsWithDiscount = products.map(product => ({
    ...product,
    discountPercentage: product.price && product.priceDiscount
      ? ((product.price - product.priceDiscount) / product.price) * 100
      : 0
  }));

  // Ordenamos os produtos pelo id
  const sortedProductsById = productsWithDiscount.sort((a, b) => a.id - b.id);

  // Criamos uma lista dos produtos com maior desconto
  const topTwoDiscountProducts = [...productsWithDiscount]
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 2);

  // Removemos os produtos com maior desconto da lista ordenada pelo id
  const remainingProducts = sortedProductsById.filter(product => !topTwoDiscountProducts.includes(product));

  return (
    <ProductGrid>
      {topTwoDiscountProducts.map((product, index) => (
        <ProductCard
          key={product.id || index}
          id={product.id || index} 
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          discountPercentage={product.discountPercentage}
          isTopDiscount={true}
        />
      ))}
      {remainingProducts.map((product, index) => (
        <ProductCard
          key={product.id || index}
          id={product.id || index} 
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          discountPercentage={product.discountPercentage}
          isTopDiscount={false}
        />
      ))}
    </ProductGrid>
  );
};

export default ProductListing;
