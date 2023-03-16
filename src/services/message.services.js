const Message = require("../models/messages.model")


class MesaggeServices{
    static async createMsg(newMensagge) {
        try {
            const message = await Message.create(newMensagge)
            return message
        } catch (error) {
            throw error
        }

    }
};


module.exports = MesaggeServices