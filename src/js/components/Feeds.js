'use strict';

import React from 'react';
import _ from 'lodash';
import Feed from './Feed';
import FeedApiService from '../helper/FeedApiService';
import FeedRequestBuilder from '../helper/FeedRequestBuilder';

module.exports = React.createClass({
  getInitialState() {
    return {feeds: []};
  },

  ajaxError () {

  },

  componentDidMount(){
    let self = this;
    let successHandler = function (data) {
      self.setState({feeds: data})
    };
    let errorHandler = function (data) {
      self.ajaxError(data);
    };

    FeedApiService.fetchData(FeedRequestBuilder.createFeedRequest({"uid": "1"}), successHandler, errorHandler);
  },

  render(){
    let feeds = _.map(this.state.feeds, function (feed) {
      return <Feed key={feed.id} feed={feed}/>;
    });

    return (
      <div className="feeds">
        {feeds}
      </div>
    );
  }
});