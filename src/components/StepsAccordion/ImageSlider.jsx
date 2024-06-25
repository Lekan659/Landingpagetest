// src/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,            // Enable autoplay
        autoplaySpeed: 1500       // Set autoplay speed to 15 seconds (15000ms)
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <span>Word1</span>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <span>Word2</span>
                </div>
                <div className="slide">
                    <span>Another1</span>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <span>Another2</span>
                </div>
                <div className="slide">
                    <span>More1</span>
                    <img src="https://via.placeholder.com/150" alt="Placeholder" />
                    <span>More2</span>
                </div>
            </Slider>
        </div>
    );
};

export default ImageSlider;
