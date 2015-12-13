'use strict';

const React = require('react');
const Feed = require('./Feed');
const _ = require('lodash');

module.exports = React.createClass({
    getInitialState() {
        var data = [
            {
                "id": "1",
                "title": "Title 1",
                "summary": "This is the summary",
                "source": "icodeit.org"
            },
            {
                "id": "2",
                "title": "Title 2",
                "summary": "This is the summary",
                "source": "icodeit.org"
            }
        ];

        return {feeds: data};
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