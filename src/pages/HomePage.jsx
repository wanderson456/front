// src/pages/HomePage.jsx
import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Gallery from '../components/Gallery';
import HighlightedCollections from './HighlightedCollections';
import ProductViewPage from './ProductViewPage';
import Colection from '../components/Colection';
import { ProductContext } from '../context/ProductContext';


// Definindo tema para uso com styled-components
const theme = {
  primary: 'red',
};

const Fundo = styled.div`
  background-color: #F9F8FE;
  min-height: 100vh; /* Garante que o fundo ocupe a altura total da tela */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  padding: 20px;
  background-color: #F5F5F5;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row; /* Altera a direção para row em telas maiores */
    padding: 20px 40px;
  }
`;

const Content = styled.div`
  flex: 1;
  margin-bottom: 20px; /* Adiciona margem inferior em dispositivos móveis */

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px; /* Adiciona margem à direita em telas maiores */
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 48px; /* Ajustado para melhor responsividade */
  margin-bottom: 10px;
  line-height: 1.2;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 68px; /* Aumenta o tamanho da fonte em telas maiores */
  }
`;

const Subtitle = styled.p`
  color: #ffd700;
  font-size: 16px; /* Ajustado para melhor responsividade */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 18px; /* Aumenta o tamanho da fonte em telas maiores */
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 14px; /* Ajustado para melhor responsividade */
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px; /* Aumenta o tamanho da fonte em telas maiores */
  }
`;

const Button = styled.button`
  background-color: #FF4081;
  color: white;
  font-size: 14px; /* Ajustado para melhor responsividade */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #E73370;
  }

  @media (min-width: 768px) {
    font-size: 16px; /* Aumenta o tamanho da fonte em telas maiores */
  }
`;

const GalleryContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; /* Centraliza a galeria horizontalmente */
  margin-left: 0;

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-left: -20px;
  }
`;

const Ornament = styled.img`
  position: absolute;
  right: 3%; /* Ajuste conforme necessário */
  top: 30%; /* Ajustado para ser relativo ao tamanho da tela */
  width: 100px; /* Ajuste o tamanho conforme necessário */
  z-index: 1;

  @media (min-width: 768px) {
    top: 50px; /* Ajuste conforme necessário em telas maiores */
    width: 150px; /* Ajuste o tamanho conforme necessário em telas maiores */
  }
`;

const HighlightedCollectionsContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  margin: 40px 0; /* Adiciona espaçamento acima e abaixo do componente */
`;

const ProductViewPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  margin: 40px 0; /* Adiciona espaçamento acima e abaixo do componente */
  width: 100%; /* Garante que o contêiner ocupe a largura completa */
`;

const ProdutoAlta = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-size: 24px; /* Ajusta o tamanho da fonte */
  align-self: flex-start; /* Alinha o título à esquerda */
  width: 100%; /* Garante que o título ocupe a largura completa do contêiner */
  text-align: left;
  margin-left: 10%;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os produtos horizontalmente */
  width: 100%; /* Garante que o contêiner ocupe a largura completa */
`;

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const highlightProduct = products[0]; // Assume que o primeiro produto é o destaque

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
              showThumbs={highlightProduct.showThumb}
              images={highlightProduct.images}
            />
          </GalleryContainer>
          <Ornament src="src/assets/ornament.svg" alt="Ornamento Amarelo" />
        </Container>
       

        <HighlightedCollectionsContainer>
          <HighlightedCollections />
        </HighlightedCollectionsContainer>

        <Colection />

        <ProductViewPageContainer>
          <ProdutoAlta>Produtos em alta</ProdutoAlta>
          <ProductsContainer>
            <ProductViewPage />
          </ProductsContainer>
        </ProductViewPageContainer>
      </ThemeProvider>
    </Fundo>
  );
}

export default HomePage;
