const {
  getHeroService,
  getHeroByIdService,
  addHeroService,
  deleteHeroService,
  updateHeroService,
  updateHeroImgService
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
  const file = req.file;
  console.log(req.body);
  console.log(file);
  const result = await addHeroService(nickname, real_name, origin_description, superpowers, catch_phrase);
  res.json({
    status: 'Added',
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

const updateHeroController = async(req,res) => {
  const {id} = req.params;
  const {nickname, real_name, origin_description, superpowers, catch_phrase} = req.body;
  const result = await updateHeroService(id, {nickname, real_name, origin_description, superpowers, catch_phrase});
  res.json({
    status: "Updated",
    data: result,
  })
}

const updateHeroImgController = async(req,res) => {
  const {id} = req.params;
  const img = req.file;
  const result = await updateHeroImgService(id, img);
  res.json({
    status: "Img updated",
    data: {
      nickname: result.nickname,
      img: result.image,
    },
  })
}

module.exports = {
  getHeroController,
  getHeroByIdController,
  addHeroController,
  deleteHeroController,
  updateHeroController,
  updateHeroImgController
}