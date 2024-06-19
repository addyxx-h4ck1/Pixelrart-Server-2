require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyUserToken = async (req, res, next) => {
  const { authorization } = req.headers //dectructure and get token
  if (!authorization) return res.status(401).json('no token') // confirm token and send 401 if none exist
  const token = authorization.split(' ')[1] //remove the Bearer header
  try {
    const decode = jwt.verify(token, process.env.USER_TOKEN_SECRET)
    req.params = decode
    next()
  } catch (error) {
    res.status(401).json('Unauthorized token')
  }
}

module.exports = { verifyUserToken }
