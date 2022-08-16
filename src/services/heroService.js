const {Hero} = require('../db/superheroModel')
const {WrongIdError} = require('../helpers/errors')



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
  if(!result) {
    throw new WrongIdError(`Fail, id ${id} is not found`)
  }
  return result;
}

const addHeroService = async(nickname, real_name, origin_description, superpowers, catch_phrase) => {
  const result = new Hero({nickname, real_name, origin_description, superpowers, catch_phrase});
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

module.exports = {
  getHeroService,
  getHeroByIdService,
  addHeroService,
  deleteHeroService
}