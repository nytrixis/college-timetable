import React from 'react';
import '../App.css';
import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="College Banner" />
    </div>
  );
};

export default Banner;
