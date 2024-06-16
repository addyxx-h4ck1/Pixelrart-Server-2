//create posts schema
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  creator: { type: String, default: 'fill', trim: true },
  datePosted: { type: Date, default: Date.now },
  title: { type: String, default: 'fill', trim: true },
  caption: { type: String, default: 'fill', trim: true },
  photoName: { type: String, default: 'fill', trim: true },
  photoAddress: { type: String, default: 'fill', trim: true },
  photoPublicId: { type: String, default: 'fill', trim: true },
  hearts: [{ id: { type: String } }],
  views: { type: Number, default: 0 },
})

module.exports = mongoose.model('Post', postSchema)
