// src/components/Logo.jsx
import React from 'react';
import styled from 'styled-components';


const LogoImage = styled.img`
  width: 253px; /* Ajuste o tamanho conforme necessário */
  height: 44px; /* Mantém a proporção da imagem */

  /* Filtro para garantir que o logo seja branco */
  &.footer-logo {
    filter: brightness(0) invert(1); /* Ajuste a cor para branco */
  }
`;

const Logo = ({ src, alt }) => {
  return (
    <LogoImage src={src} alt={alt} />
  );
};

export default Logo;
