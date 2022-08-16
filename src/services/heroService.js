const {Hero} = require('../db/superheroModel')
const {WrongIdError} = require('../helpers/errors')



const getHeroService = async() => {
  const result = await Hero.find({});
  return result;
}

const getHeroByIdService = async() => {

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