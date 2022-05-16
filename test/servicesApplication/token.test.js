const { Token } = require('../../src/servicesApplication/token');

describe('Token', () => {
  let token = '';
  beforeEach(() => {
    token = new Token();
  });

  it('should retur token', () => {
    const session = { session: '123456' };
    const newToken = token.generate(session);
    expect(newToken).toEqual(expect.stringContaining('Bearer'));
  });
});
