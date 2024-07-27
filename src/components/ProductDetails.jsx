// src/pages/ProductViewPage.jsx
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ProductContext } from '../context/ProductContext';
import Gallery from '../components/Gallery';
import Star from '../components/Star';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductView';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
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
  margin-right: 20px;
  background-color: #D3D3D3;
`;

const DetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const Name = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
`;

const Category = styled.div`
  font-size: 14px;
  color: gray;
  margin-top: 5px;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Price = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
`;

const DiscountPrice = styled.span`
  font-size: 20px;
  color: grey;
  text-decoration: line-through;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #666;
`;

const SizeContainer = styled.div`
  margin-top: 20px;
`;

const SizeTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
`;

const SizeOption = styled.label`
  padding: 5px 10px;
  border: 1px solid #ccc;
  background: ${(props) => (props.selected ? '#FF4081' : '#fff')};
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SizeRadio = styled.input`
  display: none;
`;

const ColorContainer = styled.div`
  margin-top: 20px;
`;

const ColorTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorOption = styled.label`
  width: 24px;
  height: 24px;
  border: 2px solid ${(props) => (props.selected ? '#000' : 'transparent')};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ColorRadio = styled.input`
  display: none;
`;

const BuyButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #FFC700;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
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
          <Gallery width={50} height={30} images={product.images} 
          
          showThumbs />
        </GalleryContainer>
        <DetailsContainer>
          <Name>{product.name}</Name>
          <Category>{product.category}</Category>
          <StarContainer>
            <Star /> {product.rating} ({product.reviews} avaliações)
          </StarContainer>
          <PriceContainer>
            <Price>R${product.priceDiscount}</Price>
            <DiscountPrice>R${product.price}</DiscountPrice>
          </PriceContainer>
          <Description>{product.description}</Description>
          <SizeContainer>
            <SizeTitle>Tamanho</SizeTitle>
            <SizeOptions>
              {product.sizes.map((size) => (
                <SizeOption key={size} selected={selectedSize === size}>
                  <SizeRadio 
                    type="radio" 
                    name="size" 
                    value={size} 
                    checked={selectedSize === size}
                    onChange={(e) => setSelectedSize(e.target.value)} 
                  />
                  {size}
                </SizeOption>
              ))}
            </SizeOptions>
          </SizeContainer>
          <ColorContainer>
            <ColorTitle>Cor</ColorTitle>
            <ColorOptions>
              {product.colors.map((color) => (
                <ColorOption 
                  key={color} 
                  color={color} 
                  selected={selectedColor === color}
                >
                  <ColorRadio 
                    type="radio" 
                    name="color" 
                    value={color} 
                    checked={selectedColor === color}
                    onChange={(e) => setSelectedColor(e.target.value)} 
                  />
                </ColorOption>
              ))}
            </ColorOptions>
          </ColorContainer>
          <BuyButton>COMPRAR</BuyButton>
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
