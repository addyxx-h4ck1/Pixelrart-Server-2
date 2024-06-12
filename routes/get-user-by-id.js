const express = require('express')
const { handleGetUserById } = require('../controllers/handle-user-by-id')
const router = express.Router()

router.get('/:user_ID', handleGetUserById)

module.exports = router
