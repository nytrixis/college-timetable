import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TimeTable = () => {
  const [teachers, setTeachers] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [timeTable, setTimeTable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teachersData = await axios.get('http://localhost:5000/api/teachers');
        const subjectsData = await axios.get('http://localhost:5000/api/subjects');
        const roomsData = await axios.get('http://localhost:5000/api/rooms');
        setTeachers(teachersData.data);
        setSubjects(subjectsData.data);
        setRooms(roomsData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const addTimeSlot = (isLab = false) => {
    if (isLab) {
      setTimeTable([...timeTable, { day: '', time: '', subject: '', teacher: '', room: '', batch: 'CSE1X' }]);
      setTimeTable([...timeTable, { day: '', time: '', subject: '', teacher: '', room: '', batch: 'CSE1Y' }]);
    } else {
      setTimeTable([...timeTable, { day: '', time: '', subject: '', teacher: '', room: '' }]);
    }
  };

  const handleInputChange = (index, event) => {
    const newTimeTable = [...timeTable];
    newTimeTable[index][event.target.name] = event.target.value;
    setTimeTable(newTimeTable);
  };

  return (
    <div className="timetable">
      <h1>Create TimeTable</h1>
      <button onClick={() => addTimeSlot(false)}>Add Time Slot</button>
      <button onClick={() => addTimeSlot(true)}>Add Lab Time Slot</button>
      {timeTable.map((slot, index) => (
        <div key={index} className="time-slot">
          <select name="day" value={slot.day} onChange={(e) => handleInputChange(index, e)}>
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
          <select name="time" value={slot.time} onChange={(e) => handleInputChange(index, e)}>
            <option value="">Select Time</option>
            <option value="8:00-9:00">8:00-9:00</option>
            <option value="9:00-10:00">9:00-10:00</option>
            <option value="10:00-11:00">10:00-11:00</option>
            <option value="11:00-12:00">11:00-12:00</option>
          </select>
          <select name="subject" value={slot.subject} onChange={(e) => handleInputChange(index, e)}>
            <option value="">Select Subject</option>
            {Array.isArray(subjects) && subjects.map((subject) => (
              <option key={subject._id} value={subject.name}>{subject.name}</option>
            ))}
          </select>
          <select name="teacher" value={slot.teacher} onChange={(e) => handleInputChange(index, e)}>
            <option value="">Select Teacher</option>
            {Array.isArray(teachers) && teachers.map((teacher) => (
              <option key={teacher._id} value={teacher.name}>{teacher.name}</option>
            ))}
          </select>
          <select name="room" value={slot.room} onChange={(e) => handleInputChange(index, e)}>
            <option value="">Select Room</option>
            {Array.isArray(rooms) && rooms.map((room) => (
              <option key={room._id} value={room.name}>{room.name}</option>
            ))}
          </select>
          {slot.batch && (
            <select name="batch" value={slot.batch} onChange={(e) => handleInputChange(index, e)}>
              <option value="CSE1X">CSE1X</option>
              <option value="CSE1Y">CSE1Y</option>
            </select>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
