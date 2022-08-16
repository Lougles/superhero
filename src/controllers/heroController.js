const {
  getHeroService,
  getHeroByIdService,
  addHeroService,
  deleteHeroService
} = require('../services/heroService');

const getHeroController = async(req, res) => {
  const {page} = req.query;
  const result = await getHeroService(page);
  res.json({
    status: 'success',
    data: result,
  })
}

const getHeroByIdController = async(req, res) => {
  const {id} = req.params;
  const result = await getHeroByIdService(id);
  res.json({
    status: 'success',
    data: result,
  })
}

const addHeroController = async(req, res) => {
  const {nickname, real_name, origin_description, superpowers, catch_phrase} = req.body;
  const result = await addHeroService(nickname, real_name, origin_description, superpowers, catch_phrase);
  res.json({
    status: 'success',
    data: result,
  })
}

const deleteHeroController = async(req, res) => {
  const {id} = req.params;
  const result = await deleteHeroService(id);
  res.json({
    status: 'deleted',
    data: result,
  })
}

module.exports = {
  getHeroController,
  getHeroByIdController,
  addHeroController,
  deleteHeroController
}