const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,  // e.g., original name or generated name
  },
  contentType: {
    type: String,
    required: true,  // e.g., 'image/jpeg'
  },
  fileSize: {
    type: Number,
    required: true,  // Size of the image file in bytes
  },
  metadata: {
    type: Object,
    default: {},  // Store additional image metadata (e.g., dimensions, analysis results)
  },
  imageType: {
    type: String,
    enum: ['uploaded', 'generated'],
    required: true,  // To distinguish between uploaded and generated images
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Image', ImageSchema);
