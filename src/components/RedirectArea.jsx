import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cartIcon from '../assets/mini-cart.svg'; 

const RedirectAreaContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RegisterLink = styled(Link)`
  font-size: 16px;
  color: #4a4a4a; /* dark-gray-2 */
  text-decoration: underline;
  margin-right: 15px;
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
`;

const CartIcon = styled.img`
  width: 24px; 
  height: 24px; 
  margin-left: 15px;
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
