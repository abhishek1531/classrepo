const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    _id: Number,
    name: {type: String, require: true, default: "Sample Same"},
    age: Number,
    course: String,
    skills: [String],
    address: { city: String, pincode: Number },
    isActive: Boolean,
    marks: [{ subject: String, score: Number }],
});

const Student = mongoose.model("student", studentSchema, "students");

module.exports = Student;