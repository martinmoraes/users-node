const { Token } = require('../servicesApplication/token');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    // req.decodedToken = 'noToken';
    return loggerEndReturn(res);
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2) return loggerEndReturn(res);

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) return loggerEndReturn(res);

  try {
    const decoded = await new Token().verify(token);
    req.decodedToken = decoded;
    return next();
  } catch (error) {
    return loggerEndReturn(res);
  }
};

const loggerEndReturn = res => {
  const mensage = JSON.stringify({
    token: false,
    message: 'Access token is missing or invalid',
  });
  console.error('auth', mensage);
  res.status(401).send(mensage);
  return;
};
