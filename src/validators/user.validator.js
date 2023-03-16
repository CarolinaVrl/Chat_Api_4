const { check, param } = require('express-validator');
const validateResult = require('../utils/validate');

const createUserValidate = [
    check('firstName', 'Error eb el campo de nombre')
        .exists()
        .withMessage('El nombre debe existir')
        .notEmpty()
        .withMessage('El nombre no puede estar vacío')
        .isString()
        .withMessage('El nombre debe se un string')
        .isLength({ min: 6, max: 15 })
        .withMessage('El nombre debe tener entre 6 y 15 caracteres'),
    check('email', 'Error en el correo electronico')
    .exists()
    .withMessage('no se encontro la propiedad correo electronico')
    .isEmail()
    .withMessage('El correo no tiene un formato correcto'),
    (req,res,next)=>{
        validateResult(req,res,next)
    }

];



module.exports={
    createUserValidate
}