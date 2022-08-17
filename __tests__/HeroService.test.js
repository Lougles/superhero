const { ObjectId } = require('mongodb');
const {Hero} = require('../src/db/superheroModel');
const { WrongIdError } = require('../src/helpers/errors');
const {
  getHeroByIdService,
  getHeroService
} = require('../src/services/heroService');


describe('Hero Service test', () => {
  const mHeroId = '1';
  const mockHero = {
    _id: mHeroId,
    nickname: "Superhero",
    real_name: "Clark Kent",
    origin_description: "this is a cool hero",
    superpowers: 'solar flare',
    catch_phrase: 'it is a good day for good things',
    image: '//www.avatar.com/avatar/d415f0e4t6471dfdd9bc4f827329ef48',
  };
  test('should return hero by id', async() => {
    jest.spyOn(Hero, 'findOne').mockImplementationOnce(() => mockHero)
    const result = await getHeroByIdService(mHeroId)
    expect(result._id).toEqual(mHeroId);
    expect(result.nickname).toBeDefined();
    expect(result.real_name).toBeDefined();
    expect(result.origin_description).toBeDefined();
    expect(result.superpowers).toBeDefined();
    expect(result.catch_phrase).toBeDefined();
    expect(result.image).toBeDefined();
  })
  test('should error', async() => {
    const id = '2';
    const error = `Fail, id ${id} is not found`;
    jest.spyOn(Hero, 'findOne').mockImplementationOnce(() => error)
    const result = await getHeroByIdService(id);
    expect(result).toEqual(`Fail, id ${id} is not found`)
  })
})
