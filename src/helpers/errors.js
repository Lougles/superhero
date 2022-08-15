class SuperHeroError extends Error {
  constructor(message){
    super(message);
    this.status = 400;
  }
}

class validationError extends SuperHeroError {
  constructor(message){
    super(message);
    this.status = 400;
  }
}

class WrongIdError extends SuperHeroError {
  constructor(message){
    super(message);
    this.status = 400;
  }
}

class UpdateHeroError extends Nodejs26Error {
  constructor(message){
    super(message);
    this.status = 400;
  }
}

module.exports = {
  SuperHeroError,
  validationError,
  WrongIdError,
  UpdateHeroError
}