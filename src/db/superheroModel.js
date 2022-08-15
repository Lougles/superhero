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
    default: `this is ${this.nickname} superhero. He's original name is ${this.real_name}`
  },
  superpowers: {
    type: String,
  },
  catch_phrase: {
    type: String,
  },
  Image: {
    type: String,
    default: gravatar.url(this.nickname),
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
})


const Hero = mongoose.model('Hero', superheroSchema);


module.exports = Hero;