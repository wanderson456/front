import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative; 
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  cursor: pointer; 
  gap: 5px;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: yellow;
  color: black;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 8%;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 321px; 
  object-fit: cover;
  width: 292px; 
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #FFFFFF;
`;

const Info = styled.div`
  padding: 16px; 
  text-align: left; 
  width: 100%; 
`;

const Name = styled.h2`
  font-size: 18px;
  margin: 0 0 8px;
  color: #333;
  font-weight: normal;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline; 
`;

const Price = styled.p`
  font-size: 18px;
  color: #b0b0b0;
  text-decoration: line-through;
  margin: 0 10px 0 0; 
`;

const DiscountedPrice = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin: 0;
`;

const ProductCard = ({ id, image, name, price, priceDiscount, discountPercentage, isTopDiscount }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <Container onClick={handleClick}>
      {isTopDiscount && (
        <DiscountBadge>{`${discountPercentage.toFixed(0)}% OFF`}</DiscountBadge>
      )}
      <Image src={image} alt={name} />
      <Info>
        <Name>{name}</Name>
        <PriceContainer>
          {priceDiscount ? (
            <>
              <DiscountedPrice> {` R$${priceDiscount} `} </DiscountedPrice>
              <Price> {`R$${price}`} </Price>
            </>
          ) : (
            <Price> {`R$${price}`} </Price>
          )}
        </PriceContainer>
      </Info>
    </Container>
  );
};

export default ProductCard;
