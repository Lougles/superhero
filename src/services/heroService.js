const { fstat } = require('fs-extra');
const {Hero} = require('../db/superheroModel')
const {WrongIdError} = require('../helpers/errors');
const {jimpImg} = require('../helpers/jimpImg');
const fse = require('fs-extra');


const getHeroService = async(page) => {
  if(!page){
    page = 1;
  }
  const limit = 5;
  const skip = parseInt(page - 1) * parseInt(limit);
  const result = await Hero.find({})
  .select({nickname: 1, image: 1, _id: 0})
  .skip(skip)
  .limit(limit);
  return result;
}

const getHeroByIdService = async(id) => {
  const result = await Hero.findOne({_id: id})
  .select({_id: 0, __v: 0, createdAt: 0});
  if(!result) {
    throw new WrongIdError(`Fail, id ${id} is not found`)
  }
  return result;
}

const addHeroService = async(nickname, real_name, origin_description, superpowers, catch_phrase) => {
  const result = new Hero({nickname, real_name, origin_description, superpowers, catch_phrase})
  await result.save();
  return result;
}

const deleteHeroService = async(id) => {
  const result = await Hero.findOneAndRemove({_id: id});
  if(!result){
    throw new WrongIdError(`Fail, id ${id} is not found`)
  }
  return result;
}

const updateHeroService = async(id, {nickname, real_name, origin_description, superpowers, catch_phrase}) => {
  const result = await Hero.findOneAndUpdate({_id: id}, {$set: {nickname, real_name, origin_description, superpowers, catch_phrase}},{returnDocument: 'after'})
  .select({_id: 0, __v: 0, createdAt: 0});
  if(!result) {
    throw new WrongIdError(`Fail, id ${id} is not found`)
  }
  return result;
}

const updateHeroImgService = async(id, img) => {
  const hero = await Hero.findOne({_id: id});
  const oldImg = hero.image;
  if(fse.existsSync(oldImg)){
    fse.unlink(oldImg);
  }
  const img_dir = `public/${id}/${img.filename}`;
  jimpImg(img, id);
  const result = await Hero.findOneAndUpdate({_id: id}, {$set: {image: img_dir}}, {returnDocument: 'after'});
  return result;
}

const deleteHeroImgService = async(id) => {
  const hero = await Hero.findOne({_id: id});
  const img = hero.image;
  fse.unlink(img);
  const result = await Hero.findOneAndUpdate({_id: id}, {$set: {image: ''}}, {returnDocument: 'after'});
  console.log(result);
  return result;
}

module.exports = {
  getHeroService,
  getHeroByIdService,
  addHeroService,
  deleteHeroService,
  updateHeroService,
  updateHeroImgService,
  deleteHeroImgService
}