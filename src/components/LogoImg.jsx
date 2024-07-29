import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 253px; 
  height: 44px;

  @media (max-width: 768px) {
    width: 200px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 26px;
  }
`;

const Logo = ({ src, alt }) => {
  return (
    <LogoImage src={src} alt={alt} />
  );
};

export default Logo;
