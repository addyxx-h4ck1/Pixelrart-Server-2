const express = require('express')
const { updateProfile } = require('../controllers/update-profile')
const { verifyUserToken } = require('../middleware/verify-user-jwt')
const router = express.Router()

router.post('/', verifyUserToken, updateProfile)

module.exports = router
