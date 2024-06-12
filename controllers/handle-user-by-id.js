const User = require('../models/users.model')

const handleGetUserById = async (req, res) => {
  const { user_ID } = req.params //get user ID
  if (!user_ID) return res.sendStatus(400) //send 400 if no user ID
  try {
    const existUser = await User.findById(user_ID.toString())
    if (!existUser) return res.status(400).json('user not found in DB')
    res.status(200).json(existUser)
  } catch (error) {
    res.status(404).json('user not found in DB')
  }
}
module.exports = { handleGetUserById }
