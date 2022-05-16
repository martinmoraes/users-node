const {
  TransactionRepository,
} = require('../../src/repositories/TransactionRepository');

describe('TransactionRepository', () => {
  let transactionRepository;
  beforeEach(() => {
    transactionRepository = new TransactionRepository();
  });

  it.skip('should crete transaction', async () => {
    const transaction = {
      user_id: '123',
      type: 'CREDIT',
      amount: 100,
    };
    const createdTransaction = await transactionRepository.create(transaction);
    expect(createdTransaction).toEqual(
      expect.objectContaining({
        acknowledged: true,
        insertedId: expect.any(Object),
      }),
    );
  });

  it.skip('should find transaction', async () => {
    const transaction = {
      user_id: '123',
      type: 'CREDIT',
      amount: 100,
    };
    const objInstance = await transactionRepository.create(transaction);
    const resulted = await transactionRepository.findByObjectID(
      objInstance.insertedId.toString(),
    );

    expect(resulted).toEqual(
      expect.objectContaining({
        _id: expect.any(Object),
        user_id: expect.any(String),
        type: expect.any(String),
        amount: expect.any(Number),
      }),
    );
  });

  it.skip('should find all transaction by user_id', async () => {
    const user_id = '123';
    const resulted = await transactionRepository.findAll({ user_id });

    expect(resulted).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: expect.any(Object),
          user_id: expect.any(String),
          type: expect.any(String),
          amount: expect.any(Number),
        }),
      ]),
    );
  });

  it.skip('should find all transaction', async () => {
    const resulted = await transactionRepository.findAll({});

    expect(resulted).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          _id: expect.any(Object),
          user_id: expect.any(String),
          type: expect.any(String),
          amount: expect.any(Number),
        }),
      ]),
    );
  });

  it.skip('should return balance', async () => {
    const user_id = '123';
    const createdTransaction = await transactionRepository.balance(user_id);
    expect(createdTransaction[0].result).toEqual(expect.any(Number));
  });
});
