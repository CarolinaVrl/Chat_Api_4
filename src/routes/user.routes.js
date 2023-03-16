const {Router} = require('express')
const { createUser, getAllUsers, getAllConversationByUser } = require('../controllers/user.controller')
const { createUserValidate } = require('../validators/user.validator')


const router = Router()


router.post('/api/v1/users/register', createUserValidate, createUser )
router.get('/api/v1/users', getAllUsers)
router.get('/api/v1/users/:id/conversation', getAllConversationByUser)





module.exports = router