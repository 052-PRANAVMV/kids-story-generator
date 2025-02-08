const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // e.g., "A Day in the Life of the Kid"
  },
  content: {
    type: String,
    required: true,  // Story content generated based on the images
  },
  inputImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',  // Reference to the uploaded image (input image)
    required: true,
  },
  generatedImages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',  // References to the generated images
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Story', StorySchema);
