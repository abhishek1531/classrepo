const express = require("express")
const app = express()

// JSON middleware
app.use(express.json())

// routes import
const userRoutes = require("./controller/routes/userRoutes")

// routes register
app.use("/", userRoutes)

// basic routes
app.get("/", (req,res)=>{
    res.send("Server Setup Done")
})

app.get("/home", (req,res)=>{
    res.send("Home page Done")
})

module.exports = app