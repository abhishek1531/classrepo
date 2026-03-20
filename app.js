const express = require("express")
const app = express()

app.use(express.json())

const userRoutes = require("./controller/routes/userRoutes")
const productRoutes = require("./controller/routes/productRoutes")
const cartRoutes = require("./controller/routes/cartRoutes")

// ✅ Custom Middleware (FIXED)
const customMiddleWare = (req,res,next) => {
    if(req.query.skip == "true"){
        next()
    } else {
        res.send("not authorised")
    }
}

// use middleware
app.use(customMiddleWare)

// attach routes
app.use("/", userRoutes)
app.use("/", productRoutes)
app.use("/", cartRoutes)

// basic routes
app.get("/", (req,res)=>{
    res.send("Server Setup Done")
})

app.get("/home", (req,res)=>{
    res.send("Home page Done")
})

module.exports = app