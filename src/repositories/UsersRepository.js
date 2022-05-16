const { DB } = require('./DB');
require('dotenv/config');
const ObjectId = require('mongodb').ObjectId;

class UsersRepository extends DB {
  constructor() {
    super();
    this.collectionName = 'users';
  }

  async create(user) {
    const connection = await this.dbConnection();
    const result = await connection
      .db(process.env.DATABASE)
      .collection(this.collectionName)
      .insertOne(user);
    connection.close();
    return result;
  }

  async findByObjectID(objectID) {
    const connection = await this.dbConnection();
    const result = await connection
      .db(process.env.DATABASE)
      .collection(this.collectionName)
      .findOne({ _id: ObjectId(objectID) });
    connection.close();
    return result;
  }

  async findAll(payload) {
    const connection = await this.dbConnection();
    const result = await connection
      .db(process.env.DATABASE)
      .collection(this.collectionName)
      .find(payload)
      .toArray();
    connection.close();
    return result;
  }
}

module.exports = { UsersRepository };
