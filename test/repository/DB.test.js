const { DB } = require('../../src/repositories/DB');
require('dotenv/config');

describe('dbConneciton', () => {
  let db;
  beforeEach(() => {
    db = new DB();
  });
  it('should connect to MongoDB', async () => {
    const clientDB = await db.dbConnection();
    expect(clientDB.s.url).toEqual(process.env.MONGOCONNECT);
    clientDB.close();
  });
});
