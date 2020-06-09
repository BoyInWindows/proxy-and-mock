module.exports = {

  success(data) {
    return JSON.stringify({
      "code":200,
      "msg":"OK",
      "data": data
    });
  }

}
