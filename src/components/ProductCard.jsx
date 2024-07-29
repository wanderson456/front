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
  background-color:  white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: yellow;
  color: black;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover;
 
  border-radius: 8px;
  overflow: hidden;
  

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const Info = styled.div`
  padding: 12px; 
  text-align: left; 
  width: 100%;
`;

const Name = styled.h2`
  font-size: 16px;
  margin: 0 0 8px;
  color: #333;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Price = styled.p`
  font-size: 16px;
  color: #b0b0b0;
  text-decoration: line-through;
  margin: 0 10px 0 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const DiscountedPrice = styled.p`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
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
              <DiscountedPrice>{`R$${priceDiscount}`}</DiscountedPrice>
              <Price>{`R$${price}`}</Price>
            </>
          ) : (
            <Price>{`R$${price}`}</Price>
          )}
        </PriceContainer>
      </Info>
    </Container>
  );
};

export default ProductCard;
