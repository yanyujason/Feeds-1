'use strict';
import React from 'react';
import MainPhoto from './MainPhoto';

module.exports = React.createClass({
    render(){
        let feed = this.props.feed;
        return (
            <div className="feed" id={this.props.key}>
                <MainPhoto imageUrl={feed.imageUrl}/>
                <div className="feed-content">
                    <h3 className="feed-title">{feed.title}</h3>
                    <p className="feed-summary">{feed.summary}</p>
                    <div className="feed-banner">
                        <span className="feed-source">{feed.source}</span>
                        <span className="icon-star-empty"></span>
                    </div>
                </div>
            </div>
        );
    }
});