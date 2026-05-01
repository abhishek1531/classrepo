import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/urlshortener")
.then(() => console.log("DB Connected"))
.catch(() => console.log("DB Error"));
const UrlSchema = new mongoose.Schema({
  shortId: String,
  url: String,
  clicks: Number
});
const Url = mongoose.model("Url", UrlSchema);
function makeId() {
  return Math.random().toString(36).substring(2, 8);
}
app.post("/shorturl", async (req, res) => {
  const url = req.body.url;
  const shortId = makeId();
  await Url.create({
    shortId: shortId,
    url: url,
    clicks: 0
  });
  res.send("http://localhost:3000/" + shortId);
});
app.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Url.findOne({ shortId: id });
  if (!data) {
    res.send("Not found");
    return;
  }
  data.clicks = data.clicks + 1;
  await data.save();

  res.redirect(data.url);
});
app.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Url.findOne({ shortId: id });
  if (!data) {
    res.send("Not found");
    return;
  }
  if (req.body.url) {
    data.url = req.body.url;
  }
  if (req.body.clicks != undefined) {
    data.clicks = req.body.clicks;
  }
  await data.save();
  res.send(data);
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});