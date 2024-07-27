// src/components/MainNav.js
import React from 'react';
import { NavLink } from 'react-router-dom';


const MainNav = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" exact activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/products" activeClassName="active-link">
        Produtos
      </NavLink>
      <NavLink to="/categories" activeClassName="active-link">
        Categorias
      </NavLink>
      <NavLink to="/orders" activeClassName="active-link">
        Meus Pedidos
      </NavLink>
    </nav>
  );
};

export default MainNav;
