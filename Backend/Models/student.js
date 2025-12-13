const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    rollno: String,
    name: String,
    branch: String,
    phno: Number,
    year: String
})
module.exports = mongoose.model('student', studentSchema);