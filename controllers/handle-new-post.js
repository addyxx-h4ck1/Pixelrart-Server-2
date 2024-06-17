const Post = require('../models/posts.model')
const User = require('../models/users.model')
const { handleImage } = require('../utils/handle-image')
const { sendToCloudinary } = require('../utils/upload-image-to-cloudinary')

const createNewPost = async (req, res) => {
  const { user_Id } = req.params
  let existUser = await User.findById(user_Id) //verify if user exist
  if (!existUser) return res.status(401).json('Unauthorized') //if not send 401

  const { title, caption, imageName } = req.body //destructure the body
  if (!title || !caption || !imageName)
    return res.status(400).json('Bad request, missing values')
  if (!req.files) return res.status(400).json('image not found')
  //process and send image to cloud
  const cloudinaryRes = await handleImage(req.files.image)
    .then(async (res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
      return err
    })
  const { secure_url, public_id } = cloudinaryRes //destructure image info
  if (!secure_url || !public_id)
    return res.status(500).json('failed to save image to cloudinary')
  //check if post exist using image id
  const existPost = await Post.findOne({ photoPublicId: public_id })
  if (existPost)
    return res
      .status(409)
      .json(
        'cannot store duplicate posts, the image already exist in the server'
      )
  //save post to the DB
  const newPost = await Post.create({
    creator: user_Id,
    title: title,
    caption: caption,
    photoName: imageName,
    photoAddress: secure_url,
    photoPublicId: public_id,
  })
  res.status(201).json('post added successfully')
}

module.exports = { createNewPost }
