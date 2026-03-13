const users = require("../modules/userModules")

const getUsers = (req,res)=>{
    res.json(users)
}

const getUsersById = (req,res)=>{
    const id = req.params.id

    const user = users.find(u => u.id == id)

    res.json(user)
}
// Post controller
const createUser = (req,res)=>{
    const newUser = req.body

    res.json(newUser)
}
module.exports = {
    getUsers,
    getUsersById,
    createUser
}