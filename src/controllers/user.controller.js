const UsersServices = require("../services/users.services")



const createUser = async (req,res,next)=>{
    try {
        const newUser = req.body
        const result = await UsersServices.createNewUser(newUser)
        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
};

const getAllUsers = async (req,res,next)=>{
    try {
        const result = await UsersServices.getUsers()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const getAllConversationByUser = async(req,res,next)=>{
    try {
        const {id} = req.params
        const result = await UsersServices.getConversationById(id)
        res.json(result)
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getAllConversationByUser
}