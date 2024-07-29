import React from 'react';
import Logo from './LogoImg';
import SearchBar from './SearchBar';
import RedirectArea from './RedirectArea';
import Navigation from './Navigation';
import styled from 'styled-components';
import src from '../assets/logo-header.svg';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #ddd;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  margin-bottom: 2%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoAndSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  max-width: calc(100% - 150px);

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 10px;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <LogoAndSearch>
          <Logo src={src} />
          <SearchBar />
        </LogoAndSearch>
        <RedirectArea />
      </HeaderTop>
      <HeaderBottom>
        <Navigation />
      </HeaderBottom>
    </HeaderContainer>
  );
};

export default Header;
