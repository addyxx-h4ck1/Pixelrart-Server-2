require('dotenv').config()

const verifyApiKey = (req, res, next) => {
  const { authorization } = req.headers //get the api key
  if (!authorization) return res.sendStatus(400) // bad request
  const key = authorization.split(' ')[1] //split the token from Bearer
  if (key !== process.env.API_KEY) return res.status(401).json('invalid key')
  next()
}

module.exports = { verifyApiKey }
