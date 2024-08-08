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
      price: 230,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img }, { src: img2 },{ src: img }],
      
    },

    {
      id: 2,
      image: img2,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 212,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img2 },{ src: img}, { src: img2 },],
      
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
      images: [{ src: img }, { src: img2 }, { src: img }],
     
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
      images: [{ src: img }, { src: img }, { src: img }],
     
    },
    {
      id: 5,
      image: img,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 240,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img }, { src: img },{ src: img }],
    
    },
    {
      id: 6,
      image: img2,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 260,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img2 }, { src: img },{ src: img2 }],
    
    },
    {
      id: 7,
      image: img,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 220,
      priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img }, { src: img2 },{ src: img }],
      
    },
    {
      id: 8,
      image: img2,
      name: 'Tênis Nike Revolution 6 Next Nature Masculino',
      category: 'Casual | Nike | REF:38491711',
      rating: 4.7,
      reviews: 100,
      price: 240,
      //priceDiscount: 210,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      sizes: ['39', '40', '41', '42', '43'],
      colors: ['#FF5959', '#FFC700', '#7B61FF'],
      images: [{ src: img2 }, { src: img },{ src: img2 }],
      
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
