import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import starIcon from '../assets/star-icon.svg';

const BuyBoxContainer = styled.div`
  padding: 20px;
  background-color: #F5F5F5;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto; /* Center the component on larger screens */

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ProductName = styled.h1`
  font-size: 32px;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ProductReference = styled.p`
  font-size: 12px;
  color: #999;
  margin: 4px 0 16px;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5c518;
  padding: 5px 10px;
  border-radius: 4px;
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
  margin-left: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */

  @media (max-width: 768px) {
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    margin: 6px 0;
  }
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

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const DiscountedPrice = styled.p`
  font-size: 32px;
  color: #090909; /* Cor primária para preço com desconto */
  margin: 0;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 15px 0;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin: 10px 0;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #C92071; /* Cor primária para o botão */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a41862; /* Cor do botão quando em hover */
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px;
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
      <RatingContainer>
        {stars && (
          <StarsContainer>
            {stars}
            <StarIcon src={starIcon} alt="Star" />
          </StarsContainer>
        )}
        {rating && <Rating>{rating} Avaliações</Rating>}
      </RatingContainer>
      <PriceContainer>
        {priceDiscount && (
          <>
            <DiscountedPrice>R$ {priceDiscount}</DiscountedPrice>
            <Price discounted>R$ {price}</Price>
          </>
        )}
        {!priceDiscount && <Price>R$ {price}</Price>}
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
