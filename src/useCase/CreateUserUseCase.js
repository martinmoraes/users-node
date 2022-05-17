class CreateUserUseCase {
  constructor(presenter, usersRepository) {
    this.usersRepository = usersRepository;
    this.presenter = presenter;
  }

  async execute(user) {
    try {
      const objInstance = await this.createUser(user);
      const userReceived = await this.findUser(objInstance);
      this.presenter.ok(userReceived);
    } catch (error) {
      this.presenter.fail(error.message);
    }
  }

  async createUser(user) {
    return await this.usersRepository.create(user);
  }

  async findUser(objInstance) {
    const user = await this.usersRepository.findByObjectID(
      objInstance.insertedId.toString(),
    );
    delete user._id;
    delete user.password;
    return user;
  }
}

module.exports = { CreateUserUseCase };
