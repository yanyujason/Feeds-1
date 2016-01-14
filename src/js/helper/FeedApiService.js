var FeedApiService = function () {
  var api = {};
  var $ = require('jquery');

  api.fetchData = function (request, successHandler, errorHandler) {
    return $.ajax({
      url: request.url,
      headers: request.headers,
      type: request.method,
      data: request.requestData,
      dataType: request.requestDataType,
      cache: false,
      success: successHandler,
      error: errorHandler
    });
  };

  return api;
}();

module.exports = FeedApiService;