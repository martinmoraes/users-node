const {
  FindUserUseCase,
} = require('../../../src/useCase/users/FindUserUseCase');
const {
  UsersRepository,
} = require('../../../src/repositories/UsersRepository');
const { PresenterConsole } = require('../../../src/presenter/presenterConsole');
const sinon = require('sinon');

describe('FindUserUseCase', () => {
  it('should return user without _id and password', async () => {
    const objetoOriginal = new UsersRepository();
    sinon.stub(objetoOriginal, 'findById').returns([
      {
        id: '123',
        first_name: 'João',
        last_name: 'Silva',
        password: '123456',
        email: 'joao@asdfg.br',
      },
    ]);

    const findUserUseCase = new FindUserUseCase(
      new PresenterConsole(),
      objetoOriginal,
    );

    const user_id = '123';
    const resulted = await findUserUseCase.findUser(user_id);
    expect(resulted).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        first_name: expect.any(String),
        last_name: expect.any(String),
        email: expect.any(String),
      }),
    );
  });
});
