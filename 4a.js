const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MongoDB Connection (UPDATED)
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const StudentSchema = new mongoose.Schema({
    name: String,
    rollno: Number,
    branch: String
});

// Model
const Student = mongoose.model("Student", StudentSchema);

// CREATE
app.post("/students", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Added Successfully");
});

// READ
app.get("/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// UPDATE
app.put("/students/:id", async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send("Student Updated Successfully");
});

// DELETE
app.delete("/students/:id", async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student Deleted Successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
