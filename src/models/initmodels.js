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

    Users.hasMany(Participant,{foreignKey:'userId'})
    Participant.belongsTo(Users,{foreignKey:'userId'})

    Conversation.hasMany(Participant,{foreignKey:'conversationId'})
    Participant.belongsTo(Conversation,{foreignKey:'conversationId'})

    Users.hasMany(Conversation,{foreignKey:'authorId'})
    Conversation.belongsTo(Users,{foreignKey:'authorId'})

};

module.exports = initModels