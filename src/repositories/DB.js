const { MongoClient } = require('mongodb');
require('dotenv/config');

class DB {
  async dbConnection() {
    let client;
    try {
      client = await MongoClient.connect(process.env.MONGOCONNECT, {
        useNewUrlParser: true,
      });
    } catch (error) {
      console.log('Erro ao conectar a base');
    }
    return client;
  }
}
module.exports = { DB };
