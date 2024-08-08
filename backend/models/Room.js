const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
});

module.exports = mongoose.model('Room', RoomSchema);