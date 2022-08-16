const Joi = require('joi');
const {validationError} = require('../helpers/errors');


const addHeroSchema = Joi.object({
  nickname: Joi.string().min(3).max(15).required(),
  real_name: Joi.string().min(3).max(15).required(),
  origin_description: Joi.string(),
  superpowers: Joi.string(),
  catch_phrase: Joi.string(),
});

const updateHeroSchema = Joi.object({
  nickname: Joi.string().min(3).max(15),
  real_name: Joi.string().min(3).max(15),
  origin_description: Joi.string(),
  superpowers: Joi.string(),
  catch_phrase: Joi.string(),
});

const addHeroValidation = (req, res, next) => {
  const result = addHeroSchema.validate(req.body);
  if(result.error){
    next (new validationError(result.error));
  }
  next();
}

const updateHeroValidation = (req, res, next) => {
  const result = updateHeroSchema.validate(req.body);
  if(result.error){
    next (new validationError(result.error));
  }
  next();
}

module.exports = {
  addHeroValidation,
  updateHeroValidation
}