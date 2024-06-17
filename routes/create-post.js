const express = require('express')
const { createNewPost } = require('../controllers/handle-new-post')
const { verifyUserToken } = require('../middleware/verify-user-jwt')
const router = express.Router()

router.post('/', verifyUserToken, createNewPost)

module.exports = router
