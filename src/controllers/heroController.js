const {
  getHeroService,
  getHeroByIdService,
  addHeroService,
  deleteHeroService
} = require('../services/heroService');


const getHeroController = async() => {
  const result = await getHeroService();
  return result;
}

const getHeroByIdController = async() => {
  const result = await getHeroByIdService();
  return result;
}

const addHeroController = async() => {
  const result = await addHeroService();
  return result;
}

const deleteHeroController = async() => {
  const result = await deleteHeroService();
  return result;
}


module.exports = {
  getHeroController,
  getHeroByIdController,
  addHeroController,
  deleteHeroController
}