const express = require('express');
const Teacher = require('../models/Teacher');
const Subject = require('../models/Subject');
const Room = require('../models/Room');

const router = express.Router();

// Routes for Teachers
router.post('/teachers', async (req, res) => {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.send(teacher);
});

router.get('/teachers', async (req, res) => {
    const teachers = await Teacher.find();
    res.send(teachers);
});

// Routes for Subjects
router.post('/subjects', async (req, res) => {
    const subject = new Subject(req.body);
    await subject.save();
    res.send(subject);
});

router.get('/subjects', async (req, res) => {
    const subjects = await Subject.find();
    res.send(subjects);
});

// Routes for Rooms
router.post('/rooms', async (req, res) => {
    const room = new Room(req.body);
    await room.save();
    res.send(room);
});

router.get('/rooms', async (req, res) => {
    const rooms = await Room.find();
    res.send(rooms);
});

module.exports = router;
