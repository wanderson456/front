// src/pages/HomePage.jsx
import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { MdArrowForward } from 'react-icons/md'; // Importando o ícone de seta
import Gallery from '../components/Gallery';
import HighlightedCollections from './HighlightedCollections';
import ProductViewPage from './ProductViewPage';
import Colection from '../components/Colection';
import { ProductContext } from '../context/ProductContext';
import orna from '../assets/Ornament.svg';
import { NavLink } from 'react-router-dom';

const theme = {
  primary: 'red',
};

const Fundo = styled.div`
  background-color: #F9F8FE;
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 20px;
  background-color: #F5F5F5;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row; 
    padding: 20px 40px;
  }
`;

const Content = styled.div`
  flex: 1;
  margin-bottom: 20px; 
  width: 60%;
  margin-right: 10px; 

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px; 
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 48px; 
  margin-bottom: 10px;
  line-height: 1.2;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 68px; 
  }
`;

const Subtitle = styled.p`
  color: #ffd700;
  font-size: 16px; 
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 18px; 
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 14px; 
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px; 
  }
`;

const Button = styled.button`
  background-color: #FF4081;
  color: white;
  font-size: 14px; 
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #E73370;
  }

  @media (min-width: 768px) {
    font-size: 16px; 
  }
`;

const GalleryContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 2px;
  margin-left: 10px; 

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-left: 20px; 
  }
`;

const Ornament = styled.img`
  position: absolute;
  right: 10px; 
  top: 5%; 
  width: 50px; 
  z-index: 1;

  @media (min-width: 768px) {
    top: 50px; 
    width: 100px; 
  }
`;

const HighlightedCollectionsContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin: 40px 0; 
`;

const ProductViewPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 40px 0; 
  width: 100%; 
`;

const Alta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10%; 
`;

const ProdutoAlta = styled.h1`
  color: black;
  font-size: 24px; 
  margin: 0; 
`;

const VerTodosLink = styled((NavLink)) `
  color: red;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  font-weight: normal;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled(MdArrowForward)`
  color: red;
  margin-left: 8px; /* Espaçamento entre o link e o ícone */
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%; 
`;

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const highlightProduct = products[0]; 

  return (
    <Fundo>
      <ThemeProvider theme={theme}>
        <Container>
          <Content>
            <Subtitle>Melhores ofertas personalizadas</Subtitle>
            <Title>
              Queima de <br /> estoque Nike 🔥
            </Title>
            <Description>
              Consequat culpa exercitation mollit nisi exceptetur do do tempor laboris eiusmod irure consectetur.
            </Description>
            <Button>Ver Ofertas</Button>
          </Content>
          <GalleryContainer>
            <Gallery
              width="1440"
              height="681px"
              radius="4px"
              images={highlightProduct.images}
            />
          </GalleryContainer>
          <Ornament src={orna} alt="Ornamento Amarelo" />
        </Container>
       
        <HighlightedCollectionsContainer>
          <HighlightedCollections />
        </HighlightedCollectionsContainer>

        <Colection />

        <ProductViewPageContainer>
          <Alta>
            <ProdutoAlta>Produtos em alta</ProdutoAlta>
            <VerTodosLink to={'/products'}>
              ver todos
              <ArrowIcon size={20} /> {/* Adiciona o ícone de seta */}
            </VerTodosLink>
          </Alta>
          <ProductsContainer>
            <ProductViewPage />
          </ProductsContainer>
        </ProductViewPageContainer>
      </ThemeProvider>
    </Fundo>
  );
}

export default HomePage;
