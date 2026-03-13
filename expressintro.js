const express = require('express')
const app = express()

// JSON middleware (POST request body read karne ke liye)
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server Setup Done")
});

app.get('/home',(req,res)=>{
    res.send("Home page Done")
});

// routes import
const userRoutes = require("./controller/routes/userRoutes")

// routes use
app.use("/",userRoutes)

// route params example
app.get('/users/:userId',(req,res)=>{
    const clientData = req.params.userId

    res.send({
        message: "Home page done",
        clientData: clientData
    })
});

// custom middleware
const customMiddleware = (req,res,next)=>{
    if(req.params?.uid){
        return
    }
    next();
}
// middleware use
app.use(customMiddleware)

app.listen(3000,()=>{
    console.log("Server Running at Port 3000");
});
