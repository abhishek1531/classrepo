// const express = require("express")
// const router = express.Router()

// const userController = require("../userController")

// // ✅ FIXED PATH
// const auth = require("../middleware/auth")

// router.get("/users", userController.getUsers)
// router.post("/users", userController.addUsers)

// router.get("/users/:id", userController.getUsersById)
// router.get("/search/:name", userController.searchUser)

// router.post("/login", userController.login)

// // protected route
// router.get("/secure", auth, (req,res)=>{
//     res.send("Protected data: " + req.user.name)
// })

// module.exports = router

const express = require("express");
const router = express.Router();

const { getUsers } = require("../userController");

router.get("/users", getUsers);

module.exports = router;