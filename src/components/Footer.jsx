// Footer.js
import React from 'react';
import styled from 'styled-components';
import Logo from './LogoImg'; 
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import img from '../assets/logo-footer.svg';

// Estilize o rodapé
const FooterContainer = styled.footer`
  background-color: #333; 
  color: #fff; 
  padding: 40px 20px;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const Column = styled.div`
  flex: 1;
  margin: 0 0px;
  text-align: left;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 0; 
    margin-bottom: 20px; 
  }
`;

const LogoSection = styled.div`
  margin-bottom: 20px;
  src:'../assets/logo-footer.svg';
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 12px; 
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ccc;
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const Copyright = styled.div`
  border-top: 1px solid #444;
  padding-top: 10px;
  text-align: center;
  font-size: 12px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 10px; 
  }
`;


const InfoSection = ({ title, informations }) => (
  <Column>
    <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>{title}</p>
    {informations.map((info, index) => (
      <a key={index} href={info.link} style={{ display: 'block', color: '#fff', textDecoration: 'none', marginBottom: '5px', transition: 'color 0.3s' }}>
        {info.text}
      </a>
    ))}
  </Column>
);

const Footer = () => {
  const infoLinks = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe Conosco', link: '/jobs' },
    { text: 'Meus Pedidos', link: '/orders' }
  ];

  const categoryLinks = [
    { text: 'Camisetas', link: '/camisetas' },
    { text: 'Calças', link: '/calcas' },
    { text: 'Bonés', link: '/bones' },
    { text: 'Headphones', link: '/headphones' },
    { text: 'Tênis', link: '/tenis' }
  ];

  const contactInfo = [
    { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161', link: '#' },
    { text: '(85) 3051-3411', link: '#' }
  ];

  return (
    <FooterContainer>
      <ContentWrapper>
        <Column>
          <LogoSection>
            <Logo src={img} />
          </LogoSection>

          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Description>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
          </SocialIcons>
        </Column>
        <InfoSection title="Informação" informations={infoLinks} />
        <InfoSection title="Categorias" informations={categoryLinks} />
        <InfoSection title="Contato" informations={contactInfo} />
      </ContentWrapper>
      <hr />
      <Copyright>
        &copy; 2024 Digital Store
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
