const {Hero} = require('../db/superheroModel')
const {WrongIdError} = require('../helpers/errors')



const getHeroService = async() => {
  const result = await Hero.find({});
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

const deleteHeroService = async() => {

}

module.exports = {
  getHeroService,
  getHeroByIdService,
  addHeroService,
  deleteHeroService
}