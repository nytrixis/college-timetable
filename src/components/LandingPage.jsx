import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to College Timetable Generator</h1>
      <nav>
        <Link to="/timetable?semester=odd">Odd Semester</Link>
        <Link to="/timetable?semester=even">Even Semester</Link>
      </nav>
    </div>
  );
};

export default LandingPage;