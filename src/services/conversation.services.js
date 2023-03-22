const Conversation = require("../models/conversation.model")
const Message = require("../models/messages.model")
const Participant = require("../models/participants.model")
const Users = require("../models/user.model")



class ConversationServices {
    static async createConversation(newConversation, participant) {
        try {
            const conversation = await Conversation.create(newConversation)
            await Participant.create({
                userId: newConversation.authorId,
                conversationId: conversation.id
            });
            await Participant.bulkCreate(participant.map(user => ({
                userId: user,
                conversationId: conversation.id
            })))
            return conversation
        } catch (error) {
            throw error
        }
    }
    static async createConversationCouple(newConversation, participant) {
        try {
            const conversation = await Conversation.create(newConversation)
            await Participant.create({
                userId: newConversation.authorId,
                conversationId: conversation.id
            })
            await Participant.create({
                userId: participant,
                conversationId: conversation.id
            })
        } catch (error) {
            throw error

        }
    }
    static async getAllMessage(id) {
        try {
            const conversationHasMessage = await Conversation.findByPk(id, {
                attributes: ["id", "title", "authorId"],
                include: {
                    model: Message,
                    attributes: ["id", "content", "authorId"],
                    include: { model: Users, attributes: ["firstName"] },



                }

            })

            return conversationHasMessage
        } catch (error) {
            throw error
        }
    }
};


module.exports = ConversationServices