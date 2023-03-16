const db = require("../utils/database");
const {DataTypes} = require('sequelize')



const Participant = db.define('participants',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'user_id'

    },
    conversationId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:'conversation_id'
    }

});

module.exports = Participant