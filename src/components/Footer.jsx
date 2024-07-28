import React from 'react';
import styled from 'styled-components';
import Information from './Information'; 
import LogoImg from './LogoImg';
import img from '../assets/logo-footer.svg';
import face from '../assets/facebook.svg';
import insta from '../assets/instagram.svg';
import x from '../assets/twitter.svg';

const FooterContainer = styled.footer`
  background-color: #1F1F1F; 
  color: #FFFFFF; 
  padding: 40px 0;
`;

const FooterContent = styled.div`
  padding: 0 20px; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px; 
  margin: 0 auto; 
`;

const Divimg = styled.div`
  flex: 1.5; 
  margin-right: 8%;
`;

const Logo = styled.div`
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin-bottom: 20px;
  max-width: 100%;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const IconLink = styled.a`
  display: inline-block;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0.5px solid #474747; 
  margin: 20px auto; 
  width: 80%; 
`;

const Copyright = styled.p`
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 14px;
`;

const InformationContainer = styled.div`
  flex: 1;
  margin-left: 2%;
`;

const Footer = () => {
  const info1 = {
    title: "Informações",
    informations: [
      { text: "Sobre Drip Store", link: "/sobre-nos" },
      { text: "Segurança", link: "/segurity" },
      { text: "Whilist", link: "/Whilist" },
      { text: "Blog", link: "/blog" },
      { text: "Trabalhe Conosco", link: "/jobs" },
      { text: "Meus Pedidos", link: "/Meus Pedidos" },
    ]
  };

  const info2 = {
    title: "Categorias",
    informations: [
      { text: "Camisetas", link: "/Camisetas" },
      { text: "Calças", link: "/Calças" },
      { text: "Bonés", link: "/Bonés" },
      { text: "Headphones", link: "/Headphones" },
      { text: "Tênis", link: "/Tênis" }
    ]
  };

  const info3 = {
    title: "Contato",
    informations: [
      { text: "Av. Santos Dumont, 1510 - 1 " },
      { text: "andar - Aldeota, Fortaleza - CE, 60150-161"},
      { text: "(85) 3051-3411"},
    ]
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Divimg>
          <LogoImg src={img} />
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Description>
          <Icons>
            <IconLink href="https://www.facebook.com/login" target="_blank" rel="noopener noreferrer">
              <Icon src={face} alt="Facebook" />
            </IconLink>
            <IconLink href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
              <Icon src={x} alt="Twitter" />
            </IconLink>
            <IconLink href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
              <Icon src={insta} alt="Instagram" />
            </IconLink>
          </Icons>
        </Divimg>
        <InformationContainer>
          <Information title={info1.title} informations={info1.informations} />
        </InformationContainer>
        <InformationContainer>
          <Information title={info2.title} informations={info2.informations} />
        </InformationContainer>
        <InformationContainer>
          <Information title={info3.title} informations={info3.informations} />
        </InformationContainer>
      </FooterContent>
      <Hr />
      <Copyright>© 2024 Digital College</Copyright>
    </FooterContainer>
  );
};

export default Footer;
