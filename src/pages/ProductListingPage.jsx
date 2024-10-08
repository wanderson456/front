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
  box-sizing: border-box;
  width: 100%;
  background-color: #F5F5F5;

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
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
`;



const SortSelect = styled.select`
  width: 308px;
  height: 60px;
  font-size: 16px;
  color: #474747;
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
  font-size: 16px;
  color: #1F1F1F;
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
              { text: 'Novo', value: 'novo' },
              { text: 'Usado', value: 'usado' },
            ]}
          />
        </FilterContainer>
      </Sidebar>

      <Content>
        <SortContainer>
          
          <SortSelect id="sort" value={sortOption} onChange={handleSortChange}>
            
            <option value="lowest"> Ordenar por:  Mais Relevante</option>
            <option value="highest">Ordenar Por:Maior Preço</option>
            <option value="relevant">Ordenar por: Menor Preço</option>
          </SortSelect>
        </SortContainer>

        <Section title={`${products.length} produtos encontrados`} titleAlign="left">
          <ProductListing products={products} />
        </Section>
      </Content>
    </Container>
  );
};

export default ProductListingPage;
