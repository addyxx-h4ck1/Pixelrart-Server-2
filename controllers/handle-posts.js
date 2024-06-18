const Post = require('../models/posts.model')
const User = require('../models/users.model')

const getAllPosts = async (req, res) => {
  const { user_Id } = req.params
  let existUser = await User.findById(user_Id) //verify if user exist
  if (!existUser) return res.status(401).json('Unauthorized') //if not send 401

  let allPosts = await Post.find({})
    .populate('creator', 'pImg userName brandName loc')
    .lean() //get all posts

  res.status(200).json(allPosts)
}

module.exports = { getAllPosts }
