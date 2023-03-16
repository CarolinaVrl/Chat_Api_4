const db = require('../utils/database');

const {DataTypes}= require('sequelize');



const Conversation = db.define('conversation',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING(30),
        allowNull:false

    },
    typeId:{
        field:"type_id",
        allowNull:false,
        type:DataTypes.INTEGER
        
    },
    authorId:{
        field:"Admin",
        allowNull:false,
        type:DataTypes.INTEGER
    },
   

},{
    timestamps:true,
    createdAt:true,
    updatedAt:false,


});

module.exports = Conversation