
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';



const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  margin: 0;
`;

const MainContent = styled.div`
  flex: 1; 
`;

const Layout = ({children}) => {
  return (
    <>
    
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
    </>
  );
};

export default Layout;
