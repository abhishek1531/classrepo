// //require("dotenv").config()
// const app = require("./app")
// require("dotenv").config({
//     path:".env.production",
// });

// const PORT = process.env.port;
// console.log(PORT);


// const jwtToken = process.env.jwtToken;
// console.log(jwtToken);


// app.listen(PORT, ()=>{
//     console.log(`Server Running at Port ${PORT}`)
// });


// require("dotenv").config()

// const app = require("./app")

// const PORT = process.env.PORT
// console.log(PORT);

// const jwtToken = process.env.jwtToken
// console.log(jwtToken);

// app.listen(PORT, ()=>{
//     console.log(`Server Running at Port ${PORT}`)
// });
require("dotenv").config()

const app = require("./app")

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server Running at Port ${PORT}`)
})