const express = require('express')
const { deletePost } = require('../controllers/handle-delete-post')
const { verifyUserToken } = require('../middleware/verify-user-jwt')
const router = express.Router()

router.post('/', verifyUserToken, deletePost)

module.exports = router
