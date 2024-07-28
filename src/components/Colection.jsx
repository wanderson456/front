import React from 'react';
import styled from 'styled-components';
import shirtIcon from '../assets/camisa.svg'; 
import pantsIcon from '../assets/calça.svg';
import capIcon from '../assets/calça.svg';
import headphonesIcon from '../assets/hed.svg';
import sneakersIcon from '../assets/t1.svg';

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color:#F9F8FE;
 
  gap: 10px;
`;
const Title = styled.h2`
  color:grey;; 
  font-size: 16px; 
  margin: 0;
  font-weight: bold;
  text-align: center;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${props => (props.selected ? '#FF007F' : 'grey')};

  & > div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background-color: #FFFFFF;
  }

  & img {
    width: 90%;
    height: 90%;
    cursor: pointer;
  }

  & span {
    font-size: 14px;
    font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  }
`;

const categories = [
  { name: 'Camisetas', icon: shirtIcon },
  { name: 'Calças', icon: pantsIcon },
  { name: 'Bonés', icon: capIcon },
  { name: 'Headphones', icon: headphonesIcon },
  { name: 'Tênis', icon: sneakersIcon }
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
