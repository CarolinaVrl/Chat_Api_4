const Conversation = require("./conversation.model");
const Message = require("./messages.model");
const Participant = require("./participants.model");
const Type = require("./type.model");
const Users = require("./user.model")



const initModels = ()=>{
    
    Users.hasMany(Message,{foreignKey:'authorId'});
    Message.belongsTo(Users,{foreignKey:'authorId'});

    Type.hasMany(Conversation,{foreignKey:'typeId'})
    Conversation.belongsTo(Type,{foreignKey:'typeId' })

    Conversation.hasMany(Message,{foreignKey:'conversationId'})
    Message.belongsTo(Conversation,{foreignKey:'conversationId'})

    Users.belongsTo(Participant,{foreignKey:'userId'})
    Participant.hasMany(Users,{foreignKey:'userId'})

    Conversation.belongsTo(Participant,{foreignKey:'conversationId'})
    Participant.hasMany(Conversation,{foreignKey:'conversationId'})

    Users.hasMany(Conversation,{foreignKey:'authorId'})
    Conversation.belongsTo(Users,{foreignKey:'authorId'})

};

module.exports = initModels