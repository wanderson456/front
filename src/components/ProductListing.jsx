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
  padding: 20px; 

  background-color:  #F9F8FE; 

  @media (max-width: 1200px) {
    padding: 15px;
    gap: 25px; 
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 15px; 
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  }

  @media (max-width: 480px) {
    padding: 5px;
    gap: 10px; 
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  }
`;

const ProductListing = ({ products }) => {
  
  const productsWithDiscount = products.map(product => ({
    ...product,
    discountPercentage: product.price && product.priceDiscount
      ? ((product.price - product.priceDiscount) / product.price) * 100
      : 0
  }));

  
  const sortedProductsById = productsWithDiscount.sort((a, b) => a.id - b.id);

  
  const topTwoDiscountProducts = [...productsWithDiscount]
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 2);

  
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
