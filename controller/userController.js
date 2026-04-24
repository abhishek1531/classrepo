// const User = require("../models/userModules.js");
// const jwt = require("jsonwebtoken");

// // ✅ GET ALL USERS
// const getUsers = async (req, res) => {
//     const users = await User.find();
//     res.json(users);
// };

// // ✅ GET USER BY ID
// const getUsersById = async (req, res) => {
//     const id = req.params.id;
//     const user = await User.findById(id);
//     res.json(user);
// };

// // ✅ ADD USER
// const addUsers = async (req, res) => {
//     const newUser = await User.create(req.body);
//     res.json(newUser);
// };

// // ✅ SEARCH USER
// const searchUser = async (req, res) => {
//     const name = req.params.name;
//     const result = await User.find({
//         name: { $regex: name, $options: "i" }
//     });
//     res.json(result);
// };

// // 🔥 LOGIN (JWT)
// const login = (req, res) => {
//     const { name } = req.body;

//     if (name) {
//         const token = jwt.sign(
//             { name: name },
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" }
//         );

//         res.json({ token });
//     } else {
//         res.send("Invalid user");
//     }
// };

// module.exports = {
//     getUsers,
//     getUsersById,
//     addUsers,
//     searchUser,
//     login
// };const User = require("../models/userModules");













// // GET ALL
// const User = require("../models/userModules");

// // GET ALL
// const getUsers = async (req, res) => {
//     const users = await User.find({});
//     res.json(users);
// };

// // ✅ GET BY ID
// const getUserById = async (req, res) => {
//     const id = req.params.id;

//     const user = await User.findOne({ _id: id });

//     if (!user) {
//         return res.send("User not found");
//     }

//     res.json(user);
// };

// module.exports = {
//     getUsers,
//     getUserById
// };




// exports.addUser = async(req,res)=>{
//     const userMeta = req.body

//     if(userMeta?._id){
//         const existingUser = await User.find({_id:userMeta._id})
//         console.log("existingUser",existingUser);
//         if(existingUser){
//             return res.send("User already exists");
//         }
//         User.create(userMeta);
//         res.send("New user inserted");
//     }
// };





// const User = require("../models/userModules");

// // GET ALL
// const getUsers = async (req, res) => {
//     const users = await User.find({});
//     res.json(users);
// };

// // GET BY ID
// const getUserById = async (req, res) => {
//     const id = req.params.id;
//     const user = await User.findOne({ _id: id });

//     if (!user) {
//         return res.send("User not found");
//     }

//     res.json(user);
// };

// //  ADD USER
// const addUser = async (req, res) => {
//     const userMeta = req.body;

//     if (userMeta?._id) {
//         const existingUser = await User.findOne({ _id: userMeta._id });

//         if (existingUser) {
//             return res.send("User already exists ");
//         }

//         await User.create(userMeta); // await important
//         return res.send("New user inserted ");
//     }
//     res.send("Invalid data");
// };
// module.exports = {
//     getUsers,
//     getUserById,
//     addUser
// };



// // user.create(userMeta);
// // res.send("New User Indesrted");
// // };






const User = require("../models/userModules");

//  GET ALL USERS
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching users");
    }
};

//  GET USER BY ID
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching user");
    }
};

//  ADD USER (Joi validation already done in middleware)
const addUser = async (req, res) => {
    try {
        const userData = req.body;

        // 🔥 optional: check duplicate by mobile
        const existingUser = await User.findOne({ mobile: userData.mobile });

        if (existingUser) {
            return res.status(400).send("User already exists ❌");
        }

        const newUser = await User.create(userData);

        res.status(201).json({
            message: "User created successfully ",
            data: newUser
        });

    } catch (err) {
        console.log("ERROR:", err);   // 🔥 debug ke liye important
        res.status(500).send("Error saving user");
    }
};

module.exports = {
    getUsers,
    getUserById,
    addUser
};