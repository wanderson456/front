
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../components/LogoImg';
import src from '../assets/logo-header.svg';

<component></component>
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 72px;
  color: #343a40;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: #6c757d;
  margin-bottom: 30px;
`;

const BackLink = styled(Link)`
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
  padding: 10px 20px;
  border: 2px solid #007bff;
  border-radius: 5px;
  background-color: #ffffff;
  
  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <LogoImg src={src}/>
      <Title>404!</Title>
      <Subtitle>Página Não Encontrada</Subtitle>
      <BackLink to="/">Voltar para a Página Inicial</BackLink>
    </NotFoundContainer>
  );
};

export default NotFound;
