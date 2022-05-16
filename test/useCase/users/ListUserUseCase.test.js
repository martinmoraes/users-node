const {
  ListUserUseCase,
} = require('../../../src/useCase/users/ListUserUseCase');
const {
  UsersRepository,
} = require('../../../src/repositories/UsersRepository');
const { PresenterConsole } = require('../../../src/presenter/presenterConsole');
const ObjectId = require('mongodb').ObjectId;
const sinon = require('sinon');

describe('CreateUserUseCase', () => {
  let listUserUseCase;
  beforeEach(() => {
    listUserUseCase = new ListUserUseCase(
      new PresenterConsole(),
      new UsersRepository(),
    );
  });

  it('should return users without _id and password', async () => {
    const objetoOriginal = new UsersRepository();
    const objectStub = sinon.stub(objetoOriginal, 'findAll').returns([
      {
        _id: new ObjectId('111111111111111111111111'),
        id: '123',
        first_name: 'João',
        last_name: 'Silva',
        password: '123456',
        email: 'joao@asdfg.br',
      },
      {
        _id: new ObjectId('6280ebc9fca7d95bd295cb30'),
        id: '456',
        first_name: 'João',
        last_name: 'Silva',
        password: '123456',
        email: 'joao@asdfg.br',
      },
    ]);

    const resulted = await listUserUseCase.fetchUser();
    expect(resulted).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          first_name: expect.any(String),
          last_name: expect.any(String),
          email: expect.any(String),
        }),
      ]),
    );
  });
});
