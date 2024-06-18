const express = require('express')
const { getAllPosts } = require('../controllers/handle-posts')
const { verifyUserToken } = require('../middleware/verify-user-jwt')
const router = express.Router()

router.get('/', verifyUserToken, getAllPosts)

module.exports = router
