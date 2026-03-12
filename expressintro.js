const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Server Setup Done")
});

app.get('/home',(req,res)=>{
    res.send("Home page Done")
});

const userRoutes = require("./controller/routes/userRoutes")

app.use("/",userRoutes)

app.get('/users/:userId',(req,res)=>{
    const clientData = req.params.userId

    res.send({
        message: "Home page done",
        clientData: clientData
    })
});

app.listen(3000,()=>{
    console.log("Server Running at Port 3000");
});