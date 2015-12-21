const React = require('react');
const Banner = require('./Banner');
const Feeds = require('./Feeds');

module.exports = React.createClass({
    render() {
        return (
            <div className="page">
                <Banner/>
                <div className="page-content">
                   <Feeds />
                </div>
            </div>
        );
    }
});
