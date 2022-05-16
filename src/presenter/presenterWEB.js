class PresenterWEB {
  constructor(response) {
    this.response = response;
  }

  ok(payload, statusCode = 200) {
    this.response.status(statusCode).json(payload);
  }

  error(error, statusCode = 400) {
    this.response.status(statusCode).json(error);
  }

  fail(fail, statusCode = 500) {
    this.response.status(statusCode).json(fail);
  }
}

module.exports = { PresenterWEB };
