import React from 'react';
import styled from 'styled-components';
import shirtIcon from '../assets/camisa.svg'; 
import pantsIcon from '../assets/calça.svg';
import capIcon from '../assets/calça.svg';
import headphonesIcon from '../assets/hed.svg';
import sneakersIcon from '../assets/t1.svg';

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #F9F8FE;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Title = styled.h2`
  color: grey;
  font-size: 16px;
  margin: 20px 0;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin: 10px 0;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${props => (props.selected ? '#FF007F' : 'grey')};
  cursor: pointer;
  
  & > div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background-color: #FFFFFF;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }

  & img {
    width: 90%;
    height: 90%;
  }

  & span {
    font-size: 14px;
    font-weight: ${props => (props.selected ? 'bold' : 'normal')};

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

const categories = [
  { icon: shirtIcon },
  {  icon: pantsIcon },
  {  icon: capIcon },
  {  icon: headphonesIcon },
  {  icon: sneakersIcon }
];

const Colection = ({ selectedCategory }) => {
  return (
    <>
      <Title>
        Coleções em destaque
      </Title>
      <CategoriesContainer>
        {categories.map((category, index) => (
          <CategoryItem key={index} selected={selectedCategory === category.name}>
            <div>
              <img src={category.icon} alt={category.name} />
            </div>
         
          </CategoryItem>
        ))}
      </CategoriesContainer>
    </>
  );
};

export default Colection;