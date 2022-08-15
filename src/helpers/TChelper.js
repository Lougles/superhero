const {SuperHeroError} = require('./errors');


const asyncWrapper = (controller) => {
  return ( req, res, next ) => {
    controller (req, res ).catch(next);
  }
}

const errorHandler = (err, req, res, next) => {
  if(err instanceof SuperHeroError){
    return res.status(err.message).json({message: err.message})
  };
  res.status(500).json({message: err.message});
}

module.exports = {
  asyncWrapper,
  errorHandler,
}