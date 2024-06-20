const Post = require('../models/posts.model')
const User = require('../models/users.model')

const handleSingleUserPosts = async (req, res) => {
  try {
    const { user_Id } = req.params //get the user ID
    if (!user_Id) return res.send(400).json('provide a valid user Id') // if no ID send 400
    const existUser = await User.findById(user_Id) //check if user is registered
    if (!existUser)
      return res.status(404).json('invalid user ID...user not found') // send 404 if user not found
    const userPosts = await Post.find({ creator: user_Id }).populate(
      'creator',
      'pImg userName brandName loc'
    )
    res.status(200).json(userPosts)
  } catch (error) {
    console.log(error)
    res.status(500).json('server could not process your request')
  }
}

module.exports = { handleSingleUserPosts }
