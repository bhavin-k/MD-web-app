/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productImageSliderSettings, productImages } from '../../utils/mock-data';

const ImageSlider = () => {
  return (
    <Slider {...productImageSliderSettings} style={{ width: '100%' }}>
      {productImages.map((image, index) => (
        <img src={image.src} alt={image.alt} key={index} loading="lazy" />
      ))}
    </Slider>
  );
};

export default ImageSlider;
