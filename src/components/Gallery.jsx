import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const GalleryContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  overflow: hidden;
  border-radius: ${(props) => props.radius || '0'};
  
  @media (max-width: 768px) {
    height: ${(props) => (props.height ? `calc(${props.height} * 0.6)` : 'calc(100% * 0.6)')};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: ${(props) => (props.height ? `calc(${props.height} * 0.8)` : 'calc(100% * 0.8)')};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.radius || '0'};
`;

const Arrow = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &:hover {
    opacity: 0.7;
  }

  &[disabled] {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  overflow-x: auto; /* Allow horizontal scroll for thumbnails on smaller screens */
  
  @media (max-width: 768px) {
    margin-top: 5px;
  }
`;

const Thumbnail = styled.img`
  width: 117px;
  height: 95px;
  object-fit: cover;
  cursor: pointer;
  margin: 0 5px;
  border-radius: ${(props) => props.radius || '0'};
  border: ${(props) => (props.$selected ? `2px solid ${props.theme.primary}` : 'none')};

  &:hover {
    opacity: 0.7;
  }
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  width: 100%;
  
  @media (max-width: 768px) {
    bottom: 5px;
  }
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.$active ? props.theme.primary : '#bbb')};
  border-radius: 50%;
  display: inline-block;

  @media (max-width: 768px) {
    height: 8px;
    width: 8px;
  }
`;

const Gallery = ({ width, height, radius, images, showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <GalleryContainer width={width} height={height} radius={radius}>
      <Arrow src={arrowLeft} className="left" onClick={handlePrevClick} disabled={currentIndex === 0} />
      <Image src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} radius={radius} />
      <Arrow src={arrowRight} className="right" onClick={handleNextClick} disabled={currentIndex === images.length - 1} />

      {showThumbs && (
        <ThumbnailsContainer>
          {images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              $selected={index === currentIndex}
              radius={radius}
            />
          ))}
        </ThumbnailsContainer>
      )}

      <Indicators>
        {images.map((_, index) => (
          <Dot key={index} $active={index === currentIndex} />
        ))}
      </Indicators>
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  showThumbs: PropTypes.bool,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Gallery;
