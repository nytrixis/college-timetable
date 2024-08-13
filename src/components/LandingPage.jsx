import React from 'react';
import '../App.css';
import Carousel from './Carousel';
const LandingPage = () => {
  return (
    <div className="landing-page">
        <Carousel />
        <main>
            <h1>Welcome to College Timetable Generator</h1>
        </main>
    </div>
  );
};

export default LandingPage;