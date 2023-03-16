const {Router} = require('express')
const { userLogin } = require('../controllers/auth.controller')

const router= Router()




router.post('/api/v1/users/login', userLogin)


module.exports = router