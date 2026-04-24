const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    studentEmail: { type: String },

    // ✅ ADD THIS
    hobbies: [String]
});

const User = mongoose.model("user", userSchema);

module.exports = User;