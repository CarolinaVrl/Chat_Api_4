const UsersServices = require("../services/users.services");
const bcrypt = require('bcrypt')



const userLogin = async  (req,res, next)=>{
    try {
        const {email, password} = req.body;
        const user = await UsersServices.getUserByEmail(email)
        if(!user){
            return next({
                status:400,
                message:'Invalid Email',
                error: 'User not Found'
            })
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid){
            return next({
                status:400,
                message:'Invalid password, try again',
                error: 'Invalid Password'
            })
        }
        const {id, firstName, lastname } = user
        res.json({
            id, firstName, lastname, email
        })
        
    } catch (error) {
        next(error)
        
    }

}

module.exports = {
    userLogin
}