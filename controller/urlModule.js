const mongoose = require("mongoose");  // ✅ string me

const urlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true },
    status: { type: String, default: "active" },
    priority: { type: Number, default: 0 }
});

const Url = mongoose.model("url", urlSchema);

module.exports = Url;   // ✅ correct export