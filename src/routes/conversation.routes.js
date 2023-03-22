const {Router}=require('express')
const { createConversation, getAllmessageConversation, createConversationCouple } = require('../controllers/conversation.controller')


const router = Router()

router.post('/api/v1/users/conversation/group', createConversation)
router.post('/api/v1/users/conversation', createConversationCouple)
router.get('/api/v1/conversation/:id/message', getAllmessageConversation)


module.exports = router