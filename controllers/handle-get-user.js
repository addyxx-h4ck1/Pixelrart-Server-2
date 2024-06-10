const User = require('../models/users.model')
const getUser = async (req, res) => {
  const { user_Id } = req.params //get user ID
  const requestedUser = await User.findById(user_Id) //get user data from DB
  if (!requestedUser) return res.status(404).json('User doesnt exist') //respond with 404 not found
  res.status(200).json(requestedUser)
}

module.exports = { getUser }
