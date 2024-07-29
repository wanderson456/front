import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';

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
        <CollectionImage src="/collection-1.png" alt="Coleção 1" />
        <CollectionImage src="/collection-2.png" alt="Coleção 2" />
        <CollectionImage src="/collection-3.png" alt="Coleção 3" />
      </ImageContainer>
    </Section>
  );
};

export default HighlightedCollections;
