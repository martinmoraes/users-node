const { DeleteUserUseCase } = require('../../src/useCase/DeleteUserUseCase');
const { UsersRepository } = require('../../src/repositories/UsersRepository');
const { PresenterConsole } = require('../../src/presenter/presenterConsole');
const sinon = require('sinon');

describe('DeleteUserUseCase', () => {
  it('should delete user by id', async () => {
    const objetoOriginal = new UsersRepository();
    sinon
      .stub(objetoOriginal, 'deleteById')
      .returns({ acknowledged: true, deletedCount: 1 });

    const findUserUseCase = new DeleteUserUseCase(
      new PresenterConsole(),
      objetoOriginal,
    );

    const user_id = '111a';
    const resulted = await findUserUseCase.deleteUser(user_id);
    console.log(resulted);
    expect(resulted).toEqual(
      expect.objectContaining({ acknowledged: true, deletedCount: 1 }),
    );
  });
});
