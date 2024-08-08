
import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #1F1F1F;
  margin-bottom: 10px;
`;

const FilterOptions = styled.div`
  margin-left: 20px;
`;

const CustomCheckbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: ${props => (props.checked ? ' #E73370' : '#ddd')}; 
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-right: 8px;
`;

const FilterGroup = ({ title, inputType, options }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedValues(prevState => {
      if (prevState.includes(value)) {
        return prevState.filter(v => v !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  return (
    <FilterContainer>
      <h3>{title}</h3>
      <FilterOptions>
        {options.map(option => (
          <FilterLabel key={option.value}>
            <CustomCheckbox
              checked={selectedValues.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
            />
            {option.text}
          </FilterLabel>
        ))}
      </FilterOptions>
    </FilterContainer>
  );
};

export default FilterGroup;
