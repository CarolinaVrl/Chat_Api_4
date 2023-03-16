const MesaggeServices = require("../services/message.services");


const createMessage =async(req,res,next)=>{
    try {
        const newMensagge = req.body
        const result = await MesaggeServices.createMsg(newMensagge)
        res.status(201).json(result) 
    } catch (error) {
        next(error)
    }

};


module.exports = {createMessage}