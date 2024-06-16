const express = require('express')
const { createNewPost } = require('../controllers/handle-new-post')
const router = express.Router()

router.post('/', createNewPost)

module.exports = router
