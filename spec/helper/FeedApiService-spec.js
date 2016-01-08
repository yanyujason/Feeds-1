jest.dontMock('../../src/js/helper/FeedApiService.js');

describe('Feed Api Request Factory', function () {
  const request = {
    url: "url",
    headers: "headers",
    method: "POST",
    requestData: "requestData",
    requestDataType: "json"
  };

  it('calls into $.ajax with the correct params', function () {
    var $ = require("jquery");

    function successHandler() {
    }

    function errorHandler() {
    }

    var feedApiService = require('../../src/js/helper/FeedApiService');
    feedApiService.fetchData(request, successHandler, errorHandler);

    expect($.ajax).toBeCalledWith({
      url: 'url',
      headers: 'headers',
      type: 'POST',
      data: 'requestData',
      dataType: 'json',
      cache: false,
      success: successHandler,
      error: errorHandler
    });
  });

  it('calls the successHandler when $.ajax requests are finished', function () {
    var $ = require('jquery');
    var feedApiService = require('../../src/js/helper/FeedApiService');
    var successHandler = jest.genMockFunction();
    var errorHandler = jest.genMockFunction();

    feedApiService.fetchData(request, successHandler, errorHandler);
    $.ajax.mock.calls[0][0].success({"response":"success"});

    expect(successHandler.mock.calls[0][0]).toEqual({"response":"success"});
  });
});