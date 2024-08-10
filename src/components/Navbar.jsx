import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-left">
        <img src="" alt="College Logo" className="logo" />
        <h1 className="college-name">DR. B.C. ROY ENGINEERING COLLEGE</h1>
      </div> */}
      <div className="navbar-center">
        <div className="dropdown">
          <button className="dropbtn">Odd Semester</button>
          <div className="dropdown-content">
            <Link to="/timetable?semester=1">1st Semester</Link>
            <Link to="/timetable?semester=3">3rd Semester</Link>
            <Link to="/timetable?semester=5">5th Semester</Link>
            <Link to="/timetable?semester=7">7th Semester</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Even Semester</button>
          <div className="dropdown-content">
            <Link to="/timetable?semester=2">2nd Semester</Link>
            <Link to="/timetable?semester=4">4th Semester</Link>
            <Link to="/timetable?semester=6">6th Semester</Link>
            <Link to="/timetable?semester=8">8th Semester</Link>
          </div>
        </div>
        <Link to="/add-rooms">Add Rooms</Link>
        <Link to="/add-teacher">Add Teacher</Link>
        <Link to="/add-subject">Add Subject</Link>
      </div>
      <div className="navbar-right">
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
