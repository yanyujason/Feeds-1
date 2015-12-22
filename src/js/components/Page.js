const React = require('react');
const Banner = require('./Banner');
const Feeds = require('./Feeds');
const Navigation = require('./Navigation');

module.exports = React.createClass({
    render() {
        return (
            <div className="page">
                <Banner/>
                <div className="page-content">
                    <Navigation />
                    <Feeds />
                </div>
            </div>
        );
    }
});
