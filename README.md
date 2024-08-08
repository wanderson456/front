# Projeto Frontend 
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

Este é um projeto frontend desenvolvido com React, Vite e styled-components. O objetivo deste projeto é criar uma loja virtual com funcionalidades modernas e uma interface amigável.

## Estrutura do Projeto

- **`src/components/`**: Contém os componentes funcionais do projeto.
- **`src/pages/`**: Contém as páginas da loja, cada uma representando uma aba da loja.
- **`src/rotes/`**: Contém as páginas de rotas.
- **`src/context/`**: Contém a pagina ProductContext.

## Componentes 
- _Header_
    - Componente de cabeçalho com logo, campo de busca, links de navegação e carrinho de compras.
- _Footer_ 
    - Componente de rodapé com informações da empresa, links de redes sociais e texto descritivo.
- _Section_ 
    - Componente de seção que renderiza um título, elementos filhos e opcionalmente um link
- _ProductCard_
    - Exibe imagem, nome, preço e preço com desconto de um produto.
- _ProductListing_
    - Encapsula vários ProductCard
- _Gallery_
    - Exibe imagens em um slide carrossel com opções de navegação e miniaturas.
- _ProductOptions_
    - Renderiza variações de produto como tamanhos e cores.
- _BuyBox_
    - Exibe informações do produto e opções para compra.
- _SearchBar_
    - Barra de busca com ícone de pesquisa e redirecionamento para página de produtos.
- _RedirectArea_
    - Área de redirecionamento que inclui links para cadastro, login e o ícone do carrinho de compras. Posicionada no canto direito do cabeçalho.
- _Logo_
    - Componente responsável por renderizar a logo da loja.
- _Information_
    - Componente que exibe uma seção de informações estruturadas, incluindo um título e uma lista de itens com links.
- _FilterGroup_
    - Componente que exibe um grupo de opções de filtro.
- _Navigation_
    - Componente de navegação que exibe links para as principais seções do site, permitindo aos usuários navegar facilmente entre diferentes páginas.
- _ProductDetails_
    - Componente de página que exibe os detalhes de um produto específico. Ele é utilizado para fornecer uma visão completa de um produto, incluindo sua galeria de imagens.
- _Colection_
    - Componente responsável por exibir uma seção de coleções em destaque, apresentando uma lista de categorias com ícones e textos associados.
- _Air_
    - Componente projetado para destacar uma oferta especial.
## Estrutura das Páginas
- Página Inicial 
      - Slide de imagens, coleções em destaque, produtos em alta.
- Página de Listagem de Produtos
      - Ordenar por, filtrar por, listagem de produtos.
- Página de Visualização do Produto
      - Galeria, opções do produto, buy box, produtos recomendados.
  
## Dependências
- Primeicons: Ícones para o projeto.
- React: Biblioteca principal para criação de interfaces.
- React-dom: Biblioteca para manipulação do DOM com React.
- React-icons: Conjunto de ícones para React.
- React-router-dom: Biblioteca para gerenciamento de rotas no React.
- Styled-components: Biblioteca para estilização de componentes no React.

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```
## Como Clonar o Projeto
Siga os passos abaixo para clonar e configurar o projeto localmente:

1 - Clone o repositório para a sua máquina local:
```bash
git clone https://github.com/wanderson456/front.git
```
2 - Navegue até o diretório do projeto:

```bash
cd projeto-frontend
```
3 - Instale as dependências do projeto:

```bash
npm install
```
4 - Inicie o servidor de desenvolvimento:

```bash
npm run dev 
```
## Autor 

  [![Gmail](https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red)](mailto:franciscowanderson26@gmail.com) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wanderson-jord%C3%A3o-a394a615b)

  - Wanderson Jordão
  
