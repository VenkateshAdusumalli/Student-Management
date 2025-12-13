const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const studentModel = require('./Models/student');


const app = express();
app.use(cors());
app.use(express.json());

mongoose
    .connect('mongodb://127.0.0.1:27017/studentDB')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// app.get('/', (req, res) => {
//     res.json({ status: 'ok' });
// });

// app.get('/students', async (req, res) => {
//     try {
//         const students = await studentModel.find().sort({ _id: -1 });
//         return res.json(students);
//     } catch (err) {
//         console.error('Error fetching students:', err);
//         return res.status(500).json({ message: 'Failed to fetch students' });
//     }
// });

app.post('/students', async (req, res) => {
    try {
        const studentData = req.body;
        const created = await studentModel.create(studentData);
        return res.status(201).json(created);
    } catch (err) {
        console.error('Error creating student:', err);
        return res.status(500).json({ message: 'Failed to create student' });
    }
});

app.listen(5401, ()=>{
    console.log("Server is running Succesfully");
})