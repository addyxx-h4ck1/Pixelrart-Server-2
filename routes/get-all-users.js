const express = require('express')
const { getAllUsers } = require('../controllers/get-all-users')
const { verifyApiKey } = require('../middleware/auth')
const router = express.Router()

router.get('/', verifyApiKey, getAllUsers)

module.exports = router
