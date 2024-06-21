const User = require('../models/users.model')

const updateProfile = async (req, res) => {
  const { user_Id } = req.params //check for user token
  if (!user_Id) return res.status(401).json('Unauthorized')
  try {
    const user = await User.findByIdAndUpdate(user_Id, req.body) //fing user and update
    if (user) return res.status(201).json('Updated sucessfully')
    res.status(404).json('failed....user not found')
  } catch (error) {
    console.log(error)
    res.status(500).json('internal server error try again')
  }
}

module.exports = { updateProfile }
