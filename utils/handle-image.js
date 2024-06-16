const path = require('path')
const { sendToCloudinary } = require('./upload-image-to-cloudinary')

const handleImage = async (file) => {
  try {
    await file.mv(path.join(__dirname, '..', 'img', `${file.name}`))
    const cloudinaryRes = await sendToCloudinary(file.name).catch((err) => err)
    return cloudinaryRes
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = { handleImage }
