// src/pages/ProductViewPage.jsx
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductContext } from '../context/ProductContext';
import Gallery from '../components/Gallery';
import BuyBox from '../components/BuyBox';
import ProductOptions from '../components/ProductOptions';
import ProductViewPage from'../pages/ProductViewPage';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  width: 100%;
  background-color: #F5F5F5;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const MainContent = styled.div`
  display: flex;
`;

const GalleryContainer = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #D3D3D3;
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const RelatedProducts = styled.div`
  margin-top: 40px;
`;

const RelatedTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <Container>
      <Breadcrumb>Home / Produtos / {product.name}</Breadcrumb>
      <MainContent>
        <GalleryContainer>
          <Gallery 
            width={'700px'} 
            height={'570px'} 
            radius={'4px'} 
            images={product.images} 
            showThumbs
          />
        </GalleryContainer>
    
        
        <DetailsContainer>
          <BuyBox 
            name={product.name} 
            reference={product.category} 
            stars={product.rating} 
            rating={product.reviews} 
            priceDiscount= {product.priceDiscount} 
            price= {product.price} 
            description={product.description}
            
          >
            <ProductOptions 
              options={product.sizes} 
              shape='square' 
              type='text' 
              radius={'4px'}
            />
            <ProductOptions 
              options={product.colors} 
              shape='circle' 
              type='color'
            />
          </BuyBox>
        </DetailsContainer>
      </MainContent>
     
      <RelatedProducts>
        <RelatedTitle>Produtos Relacionados</RelatedTitle>
        <ProductViewPage/>
     
      </RelatedProducts>
    </Container>
  );
};

export default ProductDetails;
