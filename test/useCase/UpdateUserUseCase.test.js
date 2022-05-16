const { UpdateUserUseCase } = require('../../src/useCase/UpdateUserUseCase');
const { UsersRepository } = require('../../src/repositories/UsersRepository');
const { PresenterConsole } = require('../../src/presenter/presenterConsole');
const sinon = require('sinon');

describe('UpdateUserUseCase', () => {
  it('should return user altered', async () => {
    const objetoOriginal = new UsersRepository();
    sinon.stub(objetoOriginal, 'updateById').returns({
      acknowledged: true,
      modifiedCount: 1,
      upsertedId: null,
      upsertedCount: 0,
      matchedCount: 1,
    });

    const updateUserUseCase = new UpdateUserUseCase(
      new PresenterConsole(),
      objetoOriginal,
    );

    const user_id = '111a';
    const user = {
      id: '111a',
      first_name: 'ccc',
      last_name: 'ccc',
      password: 'ccc',
      email: 'joao@asdfg.br',
    };
    const resulted = await updateUserUseCase.updateUser(user_id, user);
    expect(resulted).toEqual(
      expect.objectContaining({
        id: '111a',
        first_name: 'ccc',
        last_name: 'ccc',
        password: 'ccc',
        email: 'joao@asdfg.br',
      }),
    );
  });
});
