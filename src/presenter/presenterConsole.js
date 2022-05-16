class PresenterConsole {
  ok(result, statusCode = 200) {
    console.log('Ok: ', statusCode, result);
  }

  error(error, statusCode = 400) {
    console.log('Error: ', statusCode, error);
  }

  fail(fail, statusCode = 500) {
    console.log('Fail: ', statusCode, fail);
  }
}

module.exports = { PresenterConsole };
