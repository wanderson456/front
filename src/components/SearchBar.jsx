import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  width: 100%; 
  max-width: 800px; 
  height: 70px;

  @media (max-width: 768px) {
    height: 50px;
    padding: 5px;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 18px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 5px;
    font-size: 16px;
  }
`;

const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  margin-left: 10px;
  font-size: 24px;

  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 20px;
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/products?filter=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput 
        type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Buscar produtos..."
      />
      <SearchIcon onClick={handleSearch} />
    </SearchBarContainer>
  );
};

export default SearchBar;
