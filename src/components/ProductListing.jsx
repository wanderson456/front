import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: #F5F5F5;
  padding: 20px;
  
`;

const ProductListing = ({ products }) => {
  const productsWithDiscount = products.map(product => ({
    ...product,
    discountPercentage: product.price && product.priceDiscount
      ? ((product.price - product.priceDiscount) / product.price) * 100
      : 0
  }));

  const sortedProducts = productsWithDiscount.sort((a, b) => b.discountPercentage - a.discountPercentage);

  const topTwoDiscountProducts = sortedProducts.slice(0, 2);

  return (
    <ProductGrid>
      {productsWithDiscount.map((product, index) => (
        <ProductCard
          key={product.id || index}
          id={product.id || index} 
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          discountPercentage={product.discountPercentage}
          isTopDiscount={topTwoDiscountProducts.includes(product)}
        />
      ))}
    </ProductGrid>
  );
};

export default ProductListing;
