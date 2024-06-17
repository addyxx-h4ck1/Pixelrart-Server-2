require('dotenv').config()
const cloudinary = require('cloudinary').v2
const { randomUUID } = require('crypto')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
})

const options = {
  folder: 'Posts',
  use_filename: true,
  unique_filename: true,
  overwrite: false,
}

module.exports = { cloudinary, options }
