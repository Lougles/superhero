const mongoose = require('mongoose');
const gravatar = require('gravatar');


const superheroSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  real_name: {
    type: String,
    required: true,
    unique: true,
  },
  origin_description: {
    type: String,
    default: `this is a cool superhero`
  },
  superpowers: {
    type: String,
  },
  catch_phrase: {
    type: String,
  },
  image: {
    type: String,
    default: gravatar.url(this.nickname),
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
})


const Hero = mongoose.model('Hero', superheroSchema);


module.exports = {
  Hero
};