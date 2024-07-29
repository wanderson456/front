import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding-bottom: 5px;

  &.active {
    color: #C92071; 
    border-bottom: 2px solid #C92071;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    text-align: center;
    width: 100%;
  }
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavLinkStyled to="/" end>
        Home
      </NavLinkStyled>
      <NavLinkStyled to="/products">
        Produtos
      </NavLinkStyled>
      <NavLinkStyled to="/categories">
        Categorias
      </NavLinkStyled>
      <NavLinkStyled to="/orders">
        Meus Pedidos
      </NavLinkStyled>
    </NavContainer>
  );
};

export default Navigation;
