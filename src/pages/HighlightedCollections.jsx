
import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; 
  background-color:  #F5F5F5;
  
`;

const CollectionImage = styled.img`
  width: 100%;
  max-width: 300px; 
  border-radius: 4px; 
  object-fit: cover; 
  cursor: pointer;
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
