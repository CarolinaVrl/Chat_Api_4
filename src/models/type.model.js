const db = require('../utils/database')
const {DataTypes} = require('sequelize')



const Type = db.define('type',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING(15),
        allowNull:false
    }

}, {
    timestamps:false
});

module.exports = Type