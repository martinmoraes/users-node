const {
  CreateUserUseCase,
} = require('../../../src/useCase/users/CreateUserUseCase');
const {
  UsersRepository,
} = require('../../../src/repositories/UsersRepository');
const { PresenterConsole } = require('../../../src/presenter/presenterConsole');
const ObjectId = require('mongodb').ObjectId;
const sinon = require('sinon');

describe('CreateUserUseCase', () => {
  let createUserUseCase;
  beforeEach(() => {
    createUserUseCase = new CreateUserUseCase(
      new PresenterConsole(),
      new UsersRepository(),
    );
  });

  it('should return user without _id and password', async () => {
    const objetoOriginal = new UsersRepository();
    sinon.stub(objetoOriginal, 'findByObjectID').returns({
      _id: new ObjectId('6280ebc9fca7d95bd295cb30'),
      id: '123',
      first_name: 'João',
      last_name: 'Silva',
      password: '123456',
      email: 'joao@asdfg.br',
    });

    const createUserUseCase = new CreateUserUseCase(
      new PresenterConsole(),
      objetoOriginal,
    );

    const createdUser = {
      acknowledged: true,
      insertedId: new ObjectId('6280ebc9fca7d95bd295cb30'),
    };
    const resulted = await createUserUseCase.findUser(createdUser);
    expect(resulted).toEqual(
      expect.objectContaining({
        id: '123',
        first_name: 'João',
        last_name: 'Silva',
        email: 'joao@asdfg.br',
      }),
    );
  });
});
