const Conversation = require("../models/conversation.model")
const Message = require("../models/messages.model")
const Users = require("../models/user.model")



class ConversationServices{
    static async createConversation(newConversation){
        try {
            const conversation = await Conversation.create(newConversation)
            return conversation
        } catch (error) {
            throw error
        }
    }
    static async getAllMessage(id){
        try {
            const conversationHasMessage = await Conversation.findByPk(id,{
                attributes:["id","title","authorId"],
                include:{
                    model:Message,
                    attributes:["id","content","authorId"],
                    include:{model:Users, attributes:["firstName"]},
                    
                    
                   
                }
                
            })
            return conversationHasMessage
        } catch (error) {
            throw error
        }
    }
};


module.exports = ConversationServices