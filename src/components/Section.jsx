
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SectionContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.align === 'center' ? 'center' : 'flex-start')};
  text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
  width: 100%;
`;

const Title = styled.h2`
  color: #5d5b5b; 
  font-size: 24px; 
  margin: 0;
`;

const Subtitle = styled.p`
  color: #FFA000;
  font-size: 16px;
  margin: 10px 0;
`;

const Link = styled.a`
  color: ${props => props.theme.primary};
  font-size: 18px;
  text-decoration: none;
  margin-left: auto;

  &:hover {
    text-decoration: underline;
  }
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: right;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;


const Section = ({ title, titleAlign = 'left', link, children, subtitle }) => {
  return (
    <SectionContainer>
      <TitleContainer align={titleAlign}>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Title>{title}</Title>
        {link && (
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            {link.text}
          </Link>
        )}
      </TitleContainer>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
};

export default Section;
