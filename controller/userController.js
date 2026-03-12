const users = require("../modules/userModules")

const getUsers = (req,res)=>{
    res.json(users)
}

const getUsersById = (req,res)=>{
    const id = req.params.id

    const user = users.find(u => u.id == id)

    res.json(user)
}
module.exports = {
    getUsers,
    getUsersById
}

