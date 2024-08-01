import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';

const Promocao = styled.button`
  background-color: #E7FF86;
  border-radius: 25px;
  border: none;
  position: absolute;
  cursor: pointer;
  margin-left: 2%;
  margin-top: 5px;
  height: 30px;
  width: 60px;
  font-size: 12px;
  
  @media (max-width: 768px) {
    height: 25px;
    width: 50px;
    font-size: 10px;
    margin-top: 2px;
  }
  
  @media (max-width: 480px) {
    height: 20px;
    width: 40px;
    font-size: 8px;
    margin-top: 1px;
  }
`;

const Btcomprar1 = styled.button`
  background-color: white;
  width: 80px;
  position: absolute;
  height: 40px;
  border-radius: 8px;
  margin-top: 40%; 
  border: none;
  margin-left: 2%;
  color: #C92071;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;

  @media (max-width: 768px) {
    height: 35px;
    width: 70px;
    font-size: 10px;
    margin-top: 40%; 
  }
  
  @media (max-width: 480px) {
    height: 30px;
    width: 60px;
    font-size: 8px;
    margin-top: 40% 
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 20px; 
  background-color: #F9F8FE;
  padding: 20px; 

  @media (max-width: 1024px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column; 
    align-items: center; 
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;

  @media (max-width: 768px) {
    max-width: 250px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

const CollectionImage = styled.img`
  width: 100%;
  border-radius: 4px; 
  object-fit: cover; 
  cursor: pointer;
`;

const HighlightedCollections = () => {
  return (
    <Section title="Coleções em destaque" titleAlign="left">
      <ImageContainer>
        {[1, 2, 3].map((collection, index) => (
          <ImageWrapper key={index}>
            <Btcomprar1>Comprar</Btcomprar1>
            <Promocao>30% OFF</Promocao>
            <CollectionImage src={`/collection-${collection}.png`} alt={`Coleção ${collection}`} />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </Section>
  );
};

export default HighlightedCollections;
