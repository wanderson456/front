// src/components/SearchBar.jsx
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
  width: 100%; /* Garante que o contêiner ocupe a largura disponível */
  max-width: 800px; /* Aumenta o limite máximo da largura do contêiner */
  height: 70px; /* Aumenta a altura do contêiner */
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 18px;
  flex: 1; /* Faz com que o input ocupe todo o espaço disponível dentro do contêiner */
`;

const SearchIcon = styled(FaSearch)`
  cursor: pointer;
  margin-left: 10px;
  font-size: 24px;
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
