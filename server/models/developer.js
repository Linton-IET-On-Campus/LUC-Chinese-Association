const mongoose = require('mongoose')

const developerSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

})

module.exports = mongoose.model('Developer', developerSchema)