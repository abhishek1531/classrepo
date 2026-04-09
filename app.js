// const express = require("express")
// const app = express()

// app.use(express.json())

// // routes
// const userRoutes = require("./controller/routes/userRoutes")
// const productRoutes = require("./controller/routes/productRoutes")
// const cartRoutes = require("./controller/routes/cartRoutes")

// // ❌ remove this global middleware (problem create kar raha tha)
// // app.use(customMiddleWare)

// // ✅ optional: sirf ek route par lagao (testing ke liye)
// const customMiddleWare = (req,res,next) => {
//     if(req.query.skip == "true"){
//         next()
//     } else {
//         res.send("not authorised")
//     }
// }

// app.set("view engine","ejs");

// app.get("/",(req,res)=>{
//     //res.send("<h1> welcome</h1>");
//     res.render("home",{universityName: "GLA UNIVERSITY",
//         students:[
//             {name : "Abhishek" , Department :"CSE"},
//             {name : "Prasun" , Department :"CSE"}
//         ],
//     });
// });


// app.get("/header",(req,res)=>{
//     res.render("header")
// });


// app.get("/footer",(req,res)=>{
//     res.render("footer")
// });

// app.get("/content",(req,res)=>{
//     res.render("content")
// });





// // attach routes
// app.use("/", userRoutes)
// app.use("/", productRoutes)
// app.use("/", cartRoutes)

// // basic routes
// app.get("/", (req,res)=>{
//     res.send("Server Setup Done")
// })

// app.get("/home", customMiddleWare, (req,res)=>{
//     res.send("Home page Done")
// })

// module.exports = app


const express = require("express")
const app = express()

app.use(express.json())

// routes
const userRoutes = require("./controller/routes/userRoutes")
const productRoutes = require("./controller/routes/productRoutes")
const cartRoutes = require("./controller/routes/cartRoutes")

// middleware
const customMiddleWare = (req,res,next) => {
    if(req.query.skip == "true"){
        next()
    } else {
        res.send("not authorised")
    }
}

// view engine
app.set("view engine","ejs")

// ✅ central data object (sir ka concept)
const homePageContent = {
    data: {
        universityName: "GLA UNIVERSITY",
        students: [
            { name: "Abhishek", Department: "CSE" },
            { name: "Prasun", Department: "CSE" }
        ]
    },

    header: {
        title: "Header Section"
    },

    content: {
        title: "Content Section",
        description: "This is content area"
    },

    footer: {
        title: "Footer Section"
    }
}

// main route
app.get("/", (req,res)=>{
    res.render("home", homePageContent)
})

// testing routes (optional)
app.get("/header",(req,res)=>{
    res.render("header", homePageContent.header)
})

app.get("/content",(req,res)=>{
    res.render("content", homePageContent.content)
})

app.get("/footer",(req,res)=>{
    res.render("footer", homePageContent.footer)
})

// middleware test
app.get("/home", customMiddleWare, (req,res)=>{
    res.send("Home page Done")
})

// attach routes
app.use("/", userRoutes)
app.use("/", productRoutes)
app.use("/", cartRoutes)

module.exports = app
