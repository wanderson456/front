
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import starIcon from '../assets/star-icon.svg';

const BuyBoxContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; 
`;

const ProductName = styled.h1`
  font-size: 32px;
  color: #333;
  margin: 0;
`;

const ProductReference = styled.p`
  font-size: 12px;
  color: #999;
  margin: 4px 0 16px;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
  background-color: #f5c518; 
  padding: 5px 10px;
  border-radius: 4px;
  margin: 10px 0;
`;

const StarIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`;

const Rating = styled.p`
  font-size: 14px;
  color: #aaa;
  margin: 0;
`;

const PriceContainer = styled.div`
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 32px;
  color: #333;
  margin: 0;
  ${props => props.discounted && `
    font-size: 16px;
    color: #aaa;
    text-decoration: line-through;
  `}
`;

const DiscountedPrice = styled.p`
  font-size: 32px;
  color: #333;
  margin: 0;
  display: inline;
  margin-left: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #f5c518; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0a90f; 
  }
`;

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <BuyBoxContainer>
      <ProductName>{name}</ProductName>
      {reference && <ProductReference>Ref: {reference}</ProductReference>}
      {stars && (
        <StarsContainer>
          {stars}
          <StarIcon src={starIcon} alt="Star" />
        </StarsContainer>
      )}
      {rating && <Rating>{rating} Avaliações</Rating>}
      <PriceContainer>
        {priceDiscount && (
          <Price discounted>{price}</Price>
        )}
        {priceDiscount && (
          <DiscountedPrice>{priceDiscount}</DiscountedPrice>
        )}
        {!priceDiscount && <Price>{price}</Price>}
      </PriceContainer>
      <Description>{description}</Description>
      {children}
      <Button>COMPRAR</Button>
    </BuyBoxContainer>
  );
};

BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string,
  stars: PropTypes.number,
  rating: PropTypes.number,
  price: PropTypes.number.isRequired,
  priceDiscount: PropTypes.number,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BuyBox;
