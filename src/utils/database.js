const {Sequelize} = require('sequelize')



const db = new Sequelize({
    database:"chat_api_4",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"Root",
    dialect:'postgres', 
    logging:false,


});

module.exports = db