const mongoose = require("mongoose");

// async function
const mdb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/college");
        console.log("Connected to Database ");
    } catch (err) {
        console.log(err);
    }
};

module.exports = mdb;