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

// module.exports = routerconst express = require("express");





// const express = require("express");
// const router = express.Router();

// const { getUsers, getUserById, addUser } = require("../userController");

// // GET
// router.get("/users", getUsers);

// // GET by ID
// router.get("/users/:id", getUserById);

// //  POST
// router.post("/users", addUser);

// module.exports = router;



const express = require("express");
const router = express.Router();

const { getUsers, getUserById, addUser } = require("../userController");

const validate = require("../middleware/userMiddleware");
const userSchema = require("../userValidation");

// GET
router.get("/users", getUsers);

// GET by ID
router.get("/users/:id", getUserById);

//  POST + Joi validation
router.post("/users", validate(userSchema), addUser);

module.exports = router;