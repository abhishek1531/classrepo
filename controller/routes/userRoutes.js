// const express = require("express")
// const router = express.Router()

// const userController = require("../userController")

// router.get("/users", userController.getUsers)
// router.get("/users/:id", userController.getUsersById)
// router.post("/users", userController.createUser)

// router .get("/get/users",userController.getUsers);
// router.post("/add/users",userController.addUsers);
// router.route("/users").get(userController.getUsers).post(userController.getUsers);

// module.exports = router

// const express = require("express")
// const router = express.Router()

// const userController = require("../userController")

// // router.get("/users",userController.getUsers);
// // router.post("/users",userController.addUsers);

// router.route("/users")
//     .get(userController.getUsers)
//     .post(userController.createUser)

// router.route("/users/:id")
//     .get(userController.getUsersById)

// module.exports = router;

const express = require("express")
const router = express.Router()

const userController = require("../userController")

router.get("/users", userController.getUsers)
router.post("/users", userController.addUsers)
router.get("/users/:id", userController.getUsersById)
router.get("/search/:name", userController.searchUser)

module.exports = router