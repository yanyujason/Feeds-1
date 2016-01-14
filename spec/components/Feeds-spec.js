jest.dontMock('../../src/js/components/Feeds');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Feeds', function () {
  const feedsData = [
    {
      "id": "1",
      "imageUrl": "www.test.com/main.jpg",
      "title": "Title 1",
      "summary": "This is the summary",
      "source": "icodeit.org"
    },
    {
      "id": "2",
      "imageUrl": "www.test.com/main.jpg",
      "title": "Title 2",
      "summary": "This is the summary",
      "source": "icodeit.org"
    }
  ];

  const Feeds = require('../../src/js/components/Feeds');
  const Feed = require('../../src/js/components/Feed');
  const FeedApiService = require('../../src/js/helper/FeedApiService');
  const FeedRequestBuilder = require('../../src/js/helper/FeedRequestBuilder');
  //const requestUrl = "https://feedApi.com/feeds";
  //FeedRequestBuilder.createFeedRequest = jest.genMockFunction().mockImplementation(function () {
  //  var mockRequest = {};
  //  mockRequest.url = requestUrl;
  //  return mockRequest;
  //});

  FeedApiService.fetchData = jest.genMockFunction();
  const component = TestUtils.renderIntoDocument(
    <Feeds />
  );

  it('should render correctly', function () {
    const feeds = TestUtils.scryRenderedComponentsWithType(component, Feeds);

    expect(feeds.length).toEqual(1);
  });

  //it('should render correctly with two feed ', function () {
  //  const feed = TestUtils.scryRenderedComponentsWithType(component, Feed);
  //
  //  expect(feed.length).toEqual(2);
  //});

});
