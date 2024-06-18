require('dotenv').config()
const port = process.env.PORT || 3002
const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const server = express()
const getUserRoute = require('./routes/get-user')
const getUserByIdRoute = require('./routes/get-user-by-id')
const getAllUsers = require('./routes/get-all-users')
const createPostRoute = require('./routes/create-post')
const getAllPosts = require('./routes/posts')

//middlewares
server.use(cors())
server.use(express.json())
server.use(fileUpload({ createParentPath: true }))

//routes
server.use('/u/o/', getUserRoute)
server.use('/u', getAllUsers)
server.use('/user', getUserByIdRoute)
server.use('/u/p', createPostRoute)
server.use('/u/posts', getAllPosts)

//test route
server.get('/', (req, res) => {
  res.json({ ok: true })
})

//start server
const start = async () => {
  try {
    await mongoose.connect(process.env.USERS_MONGO_URI)
    console.log('Database ready for mutation.....')
    server.listen(port, () => console.log('server is running on port ' + port))
  } catch (error) {
    console.error(error)
  }
}
start()
