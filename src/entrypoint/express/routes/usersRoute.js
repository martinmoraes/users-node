const verifyToken = require('../../../middlewares/verifyToken');
const { PresenterWEB } = require('../../../presenter/presenterWEB');
const { UsersRepository } = require('../../../repositories/UsersRepository');
const {
  CreateUserUseCase,
} = require('../../../useCase/users/CreateUserUseCase');
const { ListUserUseCase } = require('../../../useCase/users/ListUserUseCase');

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

  const routeId = app.route('/transactions/:user_id');
  routeId.get(verifyToken, (req, res) => {
    const user_id = req.params.user_id;
    new FindTransactionsUseCase(
      new PresenterWEB(res),
      new UsersRepository(),
    ).execute(user_id);
  });
};
