const {validationError} = require('../helpers/errors');
const Joi = require('joi');


const addHeroSchema = Joi.object({
  nickname: Joi.string().alphanum().min(3).max(15).required(),
  real_name: Joi.string().alphanum().min(3).max(15).required(),
  origin_description: Joi.string().min(10).max(300),
  superpowers: Joi.string().min(5).max(100),
  catch_phrase: Joi.string().min(5).max(100),
});

const updateHeroSchema = Joi.object({
  nickname: Joi.string().alphanum().min(3).max(15),
  real_name: Joi.string().alphanum().min(3).max(15),
  origin_description: Joi.string().min(10).max(300),
  superpowers: Joi.string().min(5).max(100),
  catch_phrase: Joi.string().min(5).max(100),
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