
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d3d3d3; 
  cursor: pointer;
  transition: border 0.3s;
  ${props => props.shape === 'circle' && `
    width: 31px;
    height: 31px;
    border-radius: 50%;
    background-color: ${props.type === 'color' ? props.option : 'transparent'};
  `}
  ${props => props.shape === 'square' && `
    width: 46px;
    height: 46px;
    border-radius: ${props.radius};
    background-color: ${props.type === 'color' ? props.option : 'transparent'};
  `}
  ${props => props.type === 'text' && `
    font-size: 24px;
    color: #333; /* Dark-gray color */
  `}
  border-color: ${props.selected ? '#C92071' : '#d3d3d3'};
  &:hover {
    border-color: #C92071;
  }
`;

const ProductOptions = ({ options, radius, shape, type, onOptionSelect }) => {
  const handleOptionClick = (option) => {
    if (onOptionSelect) onOptionSelect(option);
  };

  return (
    <OptionContainer>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          shape={shape}
          radius={radius}
          type={type}
          option={option}
          onClick={() => handleOptionClick(option)}
        >
          {type === 'text' ? option : ''}
        </OptionItem>
      ))}
    </OptionContainer>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
  onOptionSelect: PropTypes.func,
};

export default ProductOptions;
