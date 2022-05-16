const express = require('express');
const consign = require('consign');
const path = require('path');
require('dotenv/config');

class EntryPointExpress {
  execute() {
    let app = express();

    app.use(express.json());

    try {
      consign({ cwd: path.dirname(__dirname) })
        .include('express/routes')
        .into(app);
    } catch (error) {
      console.log('CONSIGN:', error);
      process.exit(1);
    }

    app.listen(process.env.PORT, () =>
      console.log(
        `Start Express, servidor está rodando na porta ${process.env.PORT}`,
      ),
    );
  }
}

module.exports = { EntryPointExpress };
