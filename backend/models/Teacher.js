const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name: String,
    code: String,
});

module.exports = mongoose.model('Teacher', TeacherSchema);
