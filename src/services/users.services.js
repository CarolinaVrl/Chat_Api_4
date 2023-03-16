const Conversation = require("../models/conversation.model")
const Message = require("../models/messages.model")
const Users = require("../models/user.model")


class UsersServices{
    static async getUserByEmail(email){
        try {
            const user = await Users.findOne({
                where:{email}
            })
            return user
        } catch (error) {
            throw error
        }
    }
    static async getUsers(){
        try {
            const users = await Users.findAll({
                attributes:["id","firstName","email"]
            })
            return users
        } catch (error) {
            throw error
        }
    }
    static async createNewUser(newUser){
        try {
            const user = await Users.create(newUser)
            return user
        } catch (error) {
            throw error
        }
    }
    static async getConversationById(id){
        try {
            const conversations = await Users.findByPk(id,{
                attributes:["id", "firstName", "email"],
                include:{model:Conversation,
                    attributes:["id","title"]

                }
            })
            return conversations
        } catch (error) {
            throw error
        }
    }
} 

module.exports = UsersServices
