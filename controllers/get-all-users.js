const User = require('../models/users.model')
const getAllUsers = async (req, res) => {
  const allUsers = await User.find()
  res.status(200).json(allUsers)
}

module.exports = { getAllUsers }
