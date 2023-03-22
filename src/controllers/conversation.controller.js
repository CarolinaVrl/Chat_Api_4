const ConversationServices = require("../services/conversation.services")


const createConversation = async(req,res,next)=>{
    try {
        const {participant,...newConversation} = req.body
        const result = await ConversationServices.createConversation(newConversation, participant)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
};
const createConversationCouple = async(req,res,next)=>{
    try {
        const {participant,...newConversation}= req.body
        const result = await ConversationServices.createConversationCouple(newConversation, participant)
        res.status(201).json(result)
        
    } catch (error) {
        next(error)
    }
}
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
    getAllmessageConversation,
    createConversationCouple
}
