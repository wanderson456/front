import React from 'react';
import styled from 'styled-components';
import ImageSrc from '../assets/especial.svg'; 

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 350px; 
  height: 350px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%; 

  @media (max-width: 768px) {
    width: 150px; 
    height: 150px; 
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; 
  border-radius: 50%; 
  background: radial-gradient(circle at center, #e8e8ff, #fff);
  margin-left: 8%;
`;

const TextContent = styled.div`
  width: 50%;
  text-align: left;
  padding-left: 40px;
 

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    text-align: center;
  }
`;

const SpecialOffer = styled.div`
  color: #C92071;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  background-color: #C92071;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #a3185e;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const Air = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={ImageSrc} alt="Special Offer" />
      </ImageWrapper>
      <TextContent>
        <SpecialOffer>Oferta especial</SpecialOffer>
        <Title>Air Jordan edição de colecionador</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        </Description>
        <Button>Ver Oferta</Button>
      </TextContent>
    </Container>
  );
};

export default Air;
