const express = require('express')
const { getUser } = require('../controllers/handle-get-user')
const { verifyUserToken } = require('../middleware/verify-user-jwt')
const router = express.Router()

router.get('/', verifyUserToken, getUser)

module.exports = router
