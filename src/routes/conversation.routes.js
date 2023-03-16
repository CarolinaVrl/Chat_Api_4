const {Router}=require('express')
const { createConversation, getAllmessageConversation } = require('../controllers/conversation.controller')


const router = Router()

router.post('/api/v1/users/conversation', createConversation)
router.get('/api/v1/conversation/:id/message', getAllmessageConversation)


module.exports = router