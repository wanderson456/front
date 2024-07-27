// src/context/ProductContext.jsx
import React, { createContext, useState } from 'react';
import img from '../assets/tenis.svg';
import img2 from '../assets/tenis2.svg';

// Cria o contexto
export const ProductContext = createContext();

// Provedor do contexto
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
        id: 1,
        image: img,
        name: 'Tênis Nike Revolution 6 Next Nature Masculino',
        category: 'Casual | Nike | REF:38491711',
        rating: 4.7,
        reviews: 90,
        price: 219,
        priceDiscount: 210,
        description: 'Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['#FF5959', '#FFC700', '#7B61FF'],
        images: [
          { src: img },
         
        ],
      },
      {
        id: 2,
        image: img2,
        name: 'Tênis Nike Revolution 6 Next Nature feminino',
        category: 'Casual | Nike | REF:38491711',
        rating: 4.7,
        reviews: 90,
        price: 219,
        priceDiscount: 210,
        description: 'Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['#FF5959', '#FFC700', '#7B61FF'],
        images: [
          { src: img2 },
         
        ],
       
      },
      {
        id: 3,
        image: img2,
        name: 'K-Swiss V8 - Masculino',
        category: 'Casual | K-Swiss V8 | REF:39542178',
        rating: 4.7,
        reviews: 90,
        price: 219,
        priceDiscount: 200,
        description: 'Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['#FF5959', '#FFC700', '#7B61FF'],
        images: [
          { src: img2 },
         
        ],
      },
      {
        id: 4,
        image: img,
        name: 'Tênis Nike Revolution 6 Next Nature Masculino',
        category: 'Casual | Nike | REF:38491711',
        rating: 4.7,
        reviews: 90,
        price: 219,
        priceDiscount: 210,
        description: 'Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['#FF5959', '#FFC700', '#7B61FF'],
        images: [
          { src: img },
         
        ],
      },
      {
        id: 5,
        image: img2,
        name: 'K-Swiss V8 - Masculino',
        category: 'Casual | K-Swiss V8 | REF:39542178',
        rating: 4.7,
        reviews: 90,
        price: 219,
        priceDiscount: 210,
        description: 'Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['#FF5959', '#FFC700', '#7B61FF'],
        images: [
          { src: img2 },
         
        ],
      },
      {
        id: 6,
        image: img2,
        name: 'K-Swiss V8 - Masculino',
        category: 'Casual | K-Swiss V8 | REF:39542178',
        rating: 4.7,
        reviews: 90,
        price: 219,
        priceDiscount: 210,
        description: 'Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['#FF5959', '#FFC700', '#7B61FF'],
        images: [
          { src: img2 },
         
        ],
      },
      {
        id: 7,
        image: img2,
        name: 'K-Swiss V8 - Masculino',
        category: 'Casual | K-Swiss V8 | REF:39542178',
        rating: 4.7,
        reviews: 90,
        price: 219,
        priceDiscount: 210,
        description: 'Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['#FF5959', '#FFC700', '#7B61FF'],
        images: [
          { src: img2 },
         
        ],
      },
      {
        id: 8,
        image: img2,
        name: 'K-Swiss V8 - Masculino',
        category: 'Casual | K-Swiss V8 | REF:39542178',
        rating: 4.7,
        reviews: 90,
        price: 219,
        priceDiscount: 210,
        description: 'Descrição do produto Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['#FF5959', '#FFC700', '#7B61FF'],
        images: [
          { src: img2 },
         
        ],
      },
  
  
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
