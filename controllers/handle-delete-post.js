const Post = require('../models/posts.model')
const User = require('../models/users.model')
const { cloudinary, options } = require('../config/cloudinary')

const deletePost = async (req, res) => {
  const { user_Id } = req.params
  let existUser = await User.findById(user_Id) //verify if user exist
  if (!existUser) return res.status(401).json('Unauthorized') //if not send 401

  const { _Id } = req.body
  if (!_Id) return res.status(400).json('post ID required') //check if post ID is available
  let reqPost = await Post.findById(_Id) //get the post from DB
  if (!reqPost) return res.status(404).json('failed.......post not found') // send error if post not found
  //get the cloudinary public Id and delete photo in cloud
  let postImg = reqPost.photoPublicId
  try {
    const deleteImg = await cloudinary.uploader.destroy(postImg, options)
    await Post.findByIdAndDelete(_Id)
    res.status(201).json('post deleted successfully')
  } catch (error) {
    console.log(error)
    res.status(500).json('failed to delete ...server error')
  }
}

module.exports = { deletePost }
