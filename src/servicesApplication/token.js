const jwt = require('jsonwebtoken');
require('dotenv/config');

class Token {
  generate(obj) {
    const token = jwt.sign(obj, process.env.PRIVATEKEY, {
      expiresIn: process.env.EXPIRES_IN,
    });
    return 'Bearer ' + token;
  }

  verify(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.PRIVATEKEY, (error, decoded) => {
        if (error) reject(error);

        resolve(decoded);
      });
    });
  }

  decode(token) {
    return jwt.decode(token);
  }
}

module.exports = { Token };
