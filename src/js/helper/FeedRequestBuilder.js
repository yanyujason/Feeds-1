var FeedRequestBuilder = function () {
  var api = {};
  var hostname = "mighty-sierra-1572.herokuapp.com";
  //var hostname = "localhost:4000";

  api.createFeedRequest = function (params) {
    var feedRequest = {};
    feedRequest.url = "http://" + hostname + "/feeds";
    feedRequest.method = "POST";
    feedRequest.headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
    feedRequest.requestData = function () {
      var requestParameters = {
        'uid': params['uid']
      };
      return JSON.stringify(requestParameters);
    }();
    feedRequest.requestDataType = "json";

    return feedRequest;
  };

  return api;
}();

module.exports = FeedRequestBuilder;
