import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cartIcon from '../assets/mini-cart.svg'; 

const RedirectAreaContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RegisterLink = styled(Link)`
  font-size: 16px;
  color: #4a4a4a; /* dark-gray-2 */
  text-decoration: underline;
  margin-right: 15px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const LoginButton = styled(Link)`
  display: inline-block;
  background-color: #C92071; 
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  width: 114px;
  height: 40px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const CartIcon = styled.img`
  width: 24px; 
  height: 24px; 
  margin-left: 15px;
  

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const RedirectArea = () => {
  return (
    <RedirectAreaContainer>
      <RegisterLink to="/register">Cadastre-se</RegisterLink>
      <LoginButton to="/login">Entrar</LoginButton>
      <CartIcon src={cartIcon} alt="Carrinho" />
    </RedirectAreaContainer>
  );
};

export default RedirectArea;
