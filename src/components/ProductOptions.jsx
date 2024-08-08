import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.shape === 'square' ? '31px' : '31px')};
  height: ${props => (props.shape === 'square' ? '31px' : '31px')};
  border: 1px solid #ccc;
  border-radius: ${props => (props.shape === 'square' ? props.radius : '50%')};
  background-color: ${props => (props.type === 'color' ? props.option : 'transparent')};
  font-size: 24px;
  color: ${props => (props.type === 'text' ? '#474747' : 'transparent')};
  cursor: pointer;
  transition: border 0.3s;

  &:hover {
    border-color: #C92071;
  }

  ${props =>
    props.selected &&
    `
    background-color: #C92071;
    border-width: 2px;
  `}
`;

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <Option
          key={index}
          option={option}
          shape={shape}
          radius={radius}
          type={type}
          selected={option === selectedOption}
          onClick={() => handleOptionClick(option)}
        >
          {type === 'text' && option}
        </Option>
      ))}
    </OptionsContainer>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(['square', 'circle']).isRequired,
  type: PropTypes.oneOf(['text', 'color']).isRequired,
};

export default ProductOptions;
