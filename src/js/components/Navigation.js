import React from 'react';

module.exports = React.createClass({
    render() {
        return (
            <aside className="navigation">
                <div className="nav-item">
                    <span className="icon-feed2"></span>
                    <span>All Feeds</span>
                </div>
                <div className="nav-item">
                    <span className="icon-star-full"></span>
                    <span>Favourites</span>
                </div>
                <div className="nav-item">
                    <span className="icon-bookmark"></span>
                    <span>Recents</span>
                </div>
                <div className="nav-item">
                    <span className="icon-cog"></span>
                    <span>Settings</span>
                </div>
            </aside>
        );
    }
});
