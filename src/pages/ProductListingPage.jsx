import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import FilterGroup from '../components/FilterGroup';
import { ProductContext } from '../context/ProductContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 308px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const SortContainer = styled.div`
  margin-bottom: 20px;
`;

const SortLabel = styled.label`
  font-size: 16px;
  color: #555;
  display: block;
  margin-bottom: 8px;
`;

const SortSelect = styled.select`
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: #555;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FilterContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FilterTitle = styled.h3`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  font-weight: normal;
`;

const ProductListingPage = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (event) => {
    const { value } = event.target;
    setSortOption(value);

    const sortedProducts = [...products].sort((a, b) => {
      if (value === 'lowest') {
        return a.price - b.price;
      } else if (value === 'highest') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

    setProducts(sortedProducts);
  };

  return (
    <Container>
      <Sidebar>
        <SortContainer>
          <SortLabel htmlFor="sort">Ordenar por</SortLabel>
          <SortSelect id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="Most Relevant">Mais Relevantes</option>
            <option value="lowest">Menor Preço</option>
            <option value="highest">Maior Preço</option>
          </SortSelect>
        </SortContainer>

        <FilterContainer>
          <FilterTitle>Filtrar por</FilterTitle>
          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={[
              { text: 'Adidas', value: 'Adidas' },
              { text: 'K-Swiss', value: 'K-Swiss' },
              { text: 'Nike', value: 'nike' },
              { text: 'Puma', value: 'puma' },
            ]}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={[
              { text: 'Esporte e Lazer', value: 'Esporte e Lazer' },
              { text: 'Casual', value: 'Casual' },
              { text: 'Utilitário', value: 'Utilitário' },
              { text: 'Corrida', value: 'Corrida' },
            ]}
          />
          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={[
              { text: 'Masculino', value: 'masculino' },
              { text: 'Feminino', value: 'feminino' },
              { text: 'Unisex', value: 'unisex' },
            ]}
          />
          <FilterGroup
            title="Estado"
            inputType="checkbox"
            options={[
              { text: 'Novo', value: 'brand1' },
              { text: 'Usado', value: 'brand2' },
            ]}
          />
        </FilterContainer>
      </Sidebar>

      <Content>
        <Section title={`${products.length} produtos encontrados`} titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </Content>
    </Container>
  );
};

export default ProductListingPage;
