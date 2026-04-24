const express = require("express");
const router = express.Router();

const { createShortUrl, redirectUrl } = require("../urlController");

// POST
router.post("/shorten", createShortUrl);

// 🔥 IMPORTANT (dynamic route)
router.get("/:shortUrl", redirectUrl);

module.exports = router;