const express = require("express")
const app = express()

app.use(express.json())

// routes
const userRoutes = require("./controller/routes/userRoutes")
const productRoutes = require("./controller/routes/productRoutes")
const cartRoutes = require("./controller/routes/cartRoutes")

// ❌ remove this global middleware (problem create kar raha tha)
// app.use(customMiddleWare)

// ✅ optional: sirf ek route par lagao (testing ke liye)
const customMiddleWare = (req,res,next) => {
    if(req.query.skip == "true"){
        next()
    } else {
        res.send("not authorised")
    }
}

// attach routes
app.use("/", userRoutes)
app.use("/", productRoutes)
app.use("/", cartRoutes)

// basic routes
app.get("/", (req,res)=>{
    res.send("Server Setup Done")
})

app.get("/home", customMiddleWare, (req,res)=>{
    res.send("Home page Done")
})

module.exports = app