const Url = require("../models/urlModule");

// ✅ CREATE SHORT URL
exports.createShortUrl = async (req, res) => {
    const { longUrl } = req.body;

    const short = Math.random().toString(36).substring(2, 8);

    const newUrl = await Url.create({
        longUrl: longUrl,
        shortUrl: short
    });

    res.json(newUrl);
};

// ✅ REDIRECT
exports.redirectUrl = async (req, res) => {
    const short = req.params.shortUrl;

    const data = await Url.findOne({ shortUrl: short });

    if (!data) {
        return res.send("URL not found ❌");
    }

    res.redirect(data.longUrl);
};