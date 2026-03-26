const users = require("../modules/userModules")
const jwt = require("jsonwebtoken")

const getUsers = (req,res)=>{
    res.json(users)
}

const getUsersById = (req,res)=>{
    const id = req.params.id
    const user = users.find(u => u.id == id)
    res.json(user)
}

const addUsers = (req,res)=>{
    const newUser = req.body
    users.push(newUser)
    res.json(newUser)
}

const searchUser = (req,res)=>{
    const name = req.params.name
    const result = users.filter(u => u.name.includes(name))
    res.json(result)
}

// 🔥 LOGIN (JWT)
const login = (req,res)=>{
    const { name } = req.body

    if(name){
        const token = jwt.sign(
            { name: name },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.json({ token })
    } else {
        res.send("Invalid user")
    }
}

module.exports = {
    getUsers,
    getUsersById,
    addUsers,
    searchUser,
    login
}