const {Hero} = require('../db/superheroModel')
const {WrongIdError} = require('../helpers/errors')



const getHeroService = async() => {
  const result = await Hero.find({});
  return result;
}

const getHeroByIdService = async() => {

}

const addHeroService = async() => {
  
}

const deleteHeroService = async() => {

}

module.exports = {
  getHeroService,
  getHeroByIdService,
  addHeroService,
  deleteHeroService
}