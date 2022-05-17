class DeleteUserUseCase {
  constructor(presenter, usersRepository) {
    this.usersRepository = usersRepository;
    this.presenter = presenter;
  }

  async execute(user_id) {
    try {
      await this.deleteUser(user_id);
      this.presenter.ok();
    } catch (error) {
      this.presenter.fail(error.message);
    }
  }

  async deleteUser(user_id) {
    return await this.usersRepository.deleteById(user_id);
  }
}

module.exports = { DeleteUserUseCase };
