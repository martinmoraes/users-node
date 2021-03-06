class UpdateUserUseCase {
  constructor(presenter, usersRepository) {
    this.usersRepository = usersRepository;
    this.presenter = presenter;
  }

  async execute(user_id, userData) {
    try {
      const userReceived = await this.updateUser(user_id, userData);
      this.presenter.ok(userReceived);
    } catch (error) {
      this.presenter.fail(error.message);
    }
  }

  async updateUser(user_id, userData) {
    await this.usersRepository.updateById(user_id, userData);
    return userData;
  }
}

module.exports = { UpdateUserUseCase };
