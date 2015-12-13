const React = require('react');

module.exports = React.createClass({
    propTypes: {
        imageUrl: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            imageUrl: "./public/img/default.png"
        };
    },

    render() {
        return (
            <img className="main-photo" src={this.props.imageUrl}/>
        );
    }
});
