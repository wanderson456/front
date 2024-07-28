
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeftArrowSvg from '../assets/arrow-left.svg';
import RightArrowSvg from '../assets/arrow-right.svg';

const GalleryContainer = styled.div`
  position: relative;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || 'transparent'}; 
`;

const MainImage = styled.img`
  width: 80%;
  height: 400px; 
  object-fit: cover; 
  border-radius: ${({ radius }) => radius || '0px'};
  display: block;
  margin-top: 5%;
`;

const ThumbnailsContainer = styled.div`
  display: ${({ showThumbs }) => (showThumbs ? 'flex' : 'none')};
  justify-content: center;
  margin-top: 20%; 
  flex-wrap: wrap; 
`;

const Thumbnail = styled.img`
  width: 20%;
  height: auto;
  margin: 0 3px; 
  cursor: pointer;
  border: 2px solid ${({ active }) => (active ? '#C92071' : 'transparent')};
  border-radius: ${({ radius }) => radius || '0px'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  padding: 2px; 
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

const Gallery = ({ images, showThumbs, radius, width, height, colors }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [bgColor, setBgColor] = useState('transparent'); 

  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
    setBgColor(colors && colors[index] ? colors[index] : 'transparent'); 
  };

  const handleLeftArrowClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setSelectedIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <GalleryContainer width={width} height={height} bgColor={bgColor}>
      <MainImage src={images[selectedIndex]?.src} radius={radius} />
      <LeftArrow onClick={handleLeftArrowClick}>
        <img src={LeftArrowSvg} alt="Previous" />
      </LeftArrow>
      <RightArrow onClick={handleRightArrowClick}>
        <img src={RightArrowSvg} alt="Next" />
      </RightArrow>
      <ThumbnailsContainer showThumbs={showThumbs}>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image.src}
            onClick={() => handleThumbnailClick(index)}
            active={selectedIndex === index}
            radius={radius}
            backgroundColor={colors && colors[index] ? colors[index] : 'transparent'}
          />
        ))}
      </ThumbnailsContainer>
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  showThumbs: PropTypes.bool,
  radius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
};

Gallery.defaultProps = {
  showThumbs: false,
  radius: '0px',
  width: '100%',
  height: 'auto',
  colors: [], 
};

export default Gallery;
