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
  box-sizing: border-box; /* Inclui padding e border no tamanho total */

  @media (max-width: 1200px) { /* Notebooks e dispositivos maiores */
    height: 60px;
    padding: 8px;
  }

  @media (max-width: 992px) { /* Tablets */
    height: 50px;
    padding: 6px;
  }

  @media (max-width: 768px) { /* Celulares pequenos */
    height: 45px;
   
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 18px;
  flex: 1;

  @media (max-width: 1200px) {
    padding: 8px;
    font-size: 16px;
  }

  @media (max-width: 992px) {
    padding: 6px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 1px;
    font-size: 8px;
  }
`;

const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  margin-left: 10px;
  font-size: 24px;

  @media (max-width: 1200px) {
    margin-left: 8px;
    font-size: 22px;
  }

  @media (max-width: 992px) {
    margin-left: 6px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
   
    font-size: 18px;
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
