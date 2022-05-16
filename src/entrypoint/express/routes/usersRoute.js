const verifyToken = require('../../../middlewares/verifyToken');
const { PresenterWEB } = require('../../../presenter/presenterWEB');
const { UsersRepository } = require('../../../repositories/UsersRepository');
const { CreateUserUseCase } = require('../../../useCase/CreateUserUseCase');
const { ListUserUseCase } = require('../../../useCase/ListUserUseCase');
const { UpdateUserUseCase } = require('../../../useCase/UpdateUserUseCase');
const { FindUserUseCase } = require('../../../useCase/FindUserUseCase');
const { DeleteUserUseCase } = require('../../../useCase/DeleteUserUseCase');

module.exports = app => {
  const route = app.route('/users');

  route.post(verifyToken, (req, res) => {
    const user = req.body;
    new CreateUserUseCase(new PresenterWEB(res), new UsersRepository()).execute(
      user,
    );
  });

  route.get(verifyToken, (req, res) => {
    const user = req.body;
    new ListUserUseCase(new PresenterWEB(res), new UsersRepository()).execute(
      user,
    );
  });

  const routeId = app.route('/users/:id');
  routeId.patch(verifyToken, (req, res) => {
    const user_id = req.params.id;
    const userData = req.body;
    new UpdateUserUseCase(new PresenterWEB(res), new UsersRepository()).execute(
      user_id,
      userData,
    );
  });

  routeId.get(verifyToken, (req, res) => {
    const user_id = req.params.id;
    new FindUserUseCase(new PresenterWEB(res), new UsersRepository()).execute(
      user_id,
    );
  });

  routeId.delete(verifyToken, (req, res) => {
    const user_id = req.params.id;
    new DeleteUserUseCase(new PresenterWEB(res), new UsersRepository()).execute(
      user_id,
    );
  });
};
