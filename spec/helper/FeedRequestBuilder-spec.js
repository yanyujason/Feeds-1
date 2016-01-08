jest.dontMock('../../src/js/helper/FeedRequestBuilder.js');
const feedRequestBuilder = require('../../src/js/helper/FeedRequestBuilder');

describe('Feed Request Builder', function() {
  it('can create feed request', function() {
    var request = feedRequestBuilder.createFeedRequest({"uid": '1'})

    expect(request.url).toEqual("https://mighty-sierra-1572.herokuapp.com/feeds");
    expect(request.method).toEqual("POST");
    expect(request.headers["Accept"]).toEqual("application/json");
    expect(request.headers["Content-Type"]).toEqual("application/json");
    expect(request.requestData).toEqual('{"uid":"1"}');
    expect(request.requestDataType).toEqual("json");
  });
});