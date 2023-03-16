const { DataTypes } = require('sequelize')

const bcrypt = require('bcrypt')
const db = require('../utils/database')


const Users = db.define('users', {
    id: {
        primaryKey: true,
        allowNull:false,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    firstName:{
        field:"first_name",
        type:DataTypes.STRING(10),
        allowNull:false
    },
    lastName:{
        field:"last_name",
        type:DataTypes.STRING,
        defaultValue:"Joe"
    },
    email:{
        unique:true,
        allowNull:false,
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING
    }
    

},{
    timestamps:false,
    hooks:{
        beforeCreate:async(user)=>{
            try {
                const salt = await bcrypt.genSalt(10)
                const passwordHast = await bcrypt.hash(user.password, salt);
                user.password = passwordHast 
            } catch (error) {
                throw error
            }

        }
    }
    
});

module.exports = Users