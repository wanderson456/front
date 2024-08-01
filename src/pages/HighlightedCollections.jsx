import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';

const Btcomprar = styled.button`
background-color: #E7FF86;
border-radius: 25px;
border: none;
position: absolute;
cursor: pointer;
margin-left: 2%;
margin-top: 5px;
height: 4%;
width: 6%;



`;

const Btcomprar1 = styled.button`
background-color: white;
width: 8%;
position: absolute;
height: 6%;
border-radius: 8px;
margin-top: 8%;
border: none;
margin-left: 2%;
color: #C92071;
font-weight: bold;
cursor: pointer;



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

const CollectionImage = styled.img`
  width: 100%;
  max-width: 300px; 
  border-radius: 4px; 
  object-fit: cover; 
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 250px; 
  }

  @media (max-width: 480px) {
    max-width: 200px; 
  }
`;

const HighlightedCollections = () => {
  return (
    <Section title="Coleções em destaque" titleAlign="left">
     
      <ImageContainer>
        <div>
        <div>
        <Btcomprar1>
          Comprar
        </Btcomprar1>
        </div>
        <Btcomprar>30% OFF </Btcomprar>
        <CollectionImage src="/collection-1.png" alt="Coleção 1" />
        </div>
        <div>
        <div>
        <Btcomprar1>
          Comprar
        </Btcomprar1>
        </div>
        <Btcomprar>30% OFF </Btcomprar>
        <CollectionImage src="/collection-2.png" alt="Coleção 2" />
        </div>
        
        <div>
        <Btcomprar>30% OFF </Btcomprar>
        <div>
        <Btcomprar1>
          Comprar
        </Btcomprar1>
        </div>
        <CollectionImage src="/collection-3.png" alt="Coleção 3" />
       
        
        </div>
        
      </ImageContainer>
    </Section>
  );
};

export default HighlightedCollections;
