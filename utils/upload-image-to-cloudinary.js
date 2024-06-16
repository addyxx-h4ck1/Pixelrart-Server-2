const { cloudinary, options } = require('../config/cloudinary')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises
//send image received to cloudinary
const sendToCloudinary = async (fileName) => {
  try {
    //send image to cloudinary
    const result = await cloudinary.uploader.upload(
      path.join(__dirname, '..', 'img', fileName),
      options
    )
    //delete the image from the server
    if (fs.existsSync(path.join(__dirname, '..', 'img', fileName))) {
      fsPromises.rm(path.join(__dirname, '..', 'img', fileName))
    }
    //return result from cloudinary
    return result
  } catch (error) {
    return error
  }
}

module.exports = { sendToCloudinary }
