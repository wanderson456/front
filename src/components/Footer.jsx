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
  padding: 40px 20px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px; 
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Divimg = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex: 1.5;
    margin-right: 20px;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description = styled.p`
  margin-bottom: 20px;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const IconLink = styled.a`
  display: inline-block;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

const Hr = styled.hr`
  border: 0.5px solid #474747; 
  margin: 20px auto; 
  width: 80%; 

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Copyright = styled.p`
  text-align: center;
  width: 100%;
  margin: 0;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const InformationContainer = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
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
      { text: "Av. Santos Dumont, 1510 - 1" , link: "" },
      { text: "andar - Aldeota, Fortaleza - CE, 60150-161" , link: "" },
      { text: "(85) 3051-3411", link: "none" },
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
