import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const Title = styled.h4`
  font-size: 18px;
  color: #fff; 
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 5px 0;

  @media (max-width: 768px) {
    margin: 4px 0;
  }

  @media (max-width: 480px) {
    margin: 3px 0;
  }
`;

const Link = styled.a`
  color: #fff; 
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Information = ({ title, informations }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {informations.map((info) => (
          <ListItem key={info.text}>
            <Link href={info.link}>{info.text}</Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

Information.propTypes = {
  title: PropTypes.string.isRequired,
  informations: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Information;
