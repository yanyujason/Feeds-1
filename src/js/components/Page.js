import React from 'react';
import Banner from './Banner';
import Feeds from './Feeds';
import Navigation from './Navigation';

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
