require('dotenv').config()
const port = process.env.PORT || 3002
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const server = express()
const getUserRoute = require('./routes/get-user')

//middlewares
server.use(cors())
server.use(express.json())

//routes
server.use('/u/o/', getUserRoute)

//test route
server.get('/', (req, res) => {
  res.json({ ok: true })
})

//start server
const start = async () => {
  try {
    await mongoose.connect(process.env.USERS_MONGO_URI)
    console.log('Users DB ready.....')
    server.listen(port, () => console.log(`server is ready`))
  } catch (error) {
    console.error(error)
  }
}
start()
