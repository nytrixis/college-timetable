const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

mongoose.connect('mongodb://localhost:27017/college-timetable', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});