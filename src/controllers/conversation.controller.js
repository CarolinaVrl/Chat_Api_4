const ConversationServices = require("../services/conversation.services")


const createConversation = async(req,res,next)=>{
    try {
        const newConversation = req.body
        const result = await ConversationServices.createConversation(newConversation)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
};
const getAllmessageConversation = async(req,res,next)=>{
    try {
        const {id}= req.params
        const result = await ConversationServices.getAllMessage(id)
        res.json(result)
    } catch (error) {
        next(error)
    }

}


module.exports = {
    createConversation,
    getAllmessageConversation
}
