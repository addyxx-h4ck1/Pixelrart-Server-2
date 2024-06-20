const express = require('express')
const {
  handleSingleUserPosts,
} = require('../controllers/handle-single-user-posts')
const router = express.Router()

router.get('/:user_Id', handleSingleUserPosts)

module.exports = router
