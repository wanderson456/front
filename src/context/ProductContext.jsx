// src/context/ProductContext.jsx
import React, { createContext, useState } from 'react';
import img from '../assets/tenis.svg';
import img2 from '../assets/tenis2.svg';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: img,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 219,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img }, { src: img2 }],
      showThumb: [{ src: img }, { src: img2 }]
    },

    {
      id: 2,
      image: img2,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 219,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img2 }, ],
      showThumb: [{ src: img }, { src: img2 }]
    },
    {
      id: 3,
      image: img,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 219,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img }, { src: img2 }],
      showThumb: [{ src: img }, { src: img2 }]
    },
    {
      id: 4,
      image: img,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 219,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img }, { src: img }],
      showThumb: [{ src: img }, { src: img } ,{ src: img }]
    },
    // Outros produtos...
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
