const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Message = db.define('mensagge',{
    id:{
        primaryKey:true,
        allowNull:false,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    conversationId:{
        field:'conversation_id',
        type:DataTypes.INTEGER,
        allowNull:false
    },
    authorId:{
        field:'author_id',
        type:DataTypes.INTEGER,
        allowNull:false
    }
    
},{
    timestamps:true,
    createdAt:true,
    updatedAt:false
});

module.exports = Message