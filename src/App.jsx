import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TimeTable from './components/TimeTable';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timetable" element={<TimeTable />} />
      </Routes>
    </Router>
  );
}

export default App;
