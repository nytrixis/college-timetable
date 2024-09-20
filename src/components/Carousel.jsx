import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import slide1 from '../assets/carousel/bcr1.jpg';
import slide2 from '../assets/carousel/bcr2.jpg';
import slide3 from '../assets/carousel/bcr3.JPG';
import slide4 from '../assets/carousel/bcr4.JPG';
import slide5 from '../assets/carousel/bcr5.JPG';
import slide6 from '../assets/carousel/bcr6.JPG';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div><img src={slide1} alt="Slide 1" /></div>
        <div><img src={slide2} alt="Slide 2" /></div>
        <div><img src={slide3} alt="Slide 3" /></div>
        <div><img src={slide4} alt="Slide 4" /></div>
        <div><img src={slide5} alt="Slide 5" /></div>
        <div><img src={slide6} alt="Slide 6" /></div>
      </Slider>
    </div>
  );
};

// Commits for testing part 1
// commits for testing part 2 
// Commits for testing part 3
// commits for testing part 4 
export default Carousel;
