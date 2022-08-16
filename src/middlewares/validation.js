const {validationError} = require('../helpers/errors');
const Joi = require('joi');


const schema = Joi.object({
  nickname: Joi.string().alphanum().min(3).max(15).required(),
  real_name: Joi.string().alphanum().min(3).max(15).required(),
  origin_description: Joi.string(),
  superpowers: Joi.string(),
  catch_phrase: Joi.string()
})

const addHeroValidation = (req, res, next) => {
  const result = schema.validate(req.body);
  if(result.error){
    next (new validationError(result.error));
  }
  next();
}

module.exports = {
  addHeroValidation
}