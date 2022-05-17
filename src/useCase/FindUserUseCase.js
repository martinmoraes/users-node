class FindUserUseCase {
  constructor(presenter, usersRepository) {
    this.usersRepository = usersRepository;
    this.presenter = presenter;
  }

  async execute(user_id) {
    try {
      const usersReceived = await this.findUser(user_id);
      this.presenter.ok(usersReceived);
    } catch (error) {
      this.presenter.fail(error.message);
    }
  }

  async findUser(user_id) {
    const users = await this.usersRepository.findById(user_id);
    const user = users[0];
    delete user._id;
    delete user.password;

    return user;
  }
}

module.exports = { FindUserUseCase };
