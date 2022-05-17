class ListUserUseCase {
  constructor(presenter, usersRepository) {
    this.usersRepository = usersRepository;
    this.presenter = presenter;
  }

  async execute() {
    try {
      const usersReceived = await this.fetchUser();
      this.presenter.ok(usersReceived);
    } catch (error) {
      this.presenter.fail(error.message);
    }
  }

  async fetchUser() {
    const users = await this.usersRepository.findAll();
    const usersReturn = users.map(user => {
      delete user._id;
      delete user.password;
      return user;
    });
    return usersReturn;
  }
}

module.exports = { ListUserUseCase };
