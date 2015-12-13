const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('lodash');

const Feeds = require('./components/Feeds');

$(function () {
    ReactDOM.render(<Feeds />, document.getElementById('container'));
});
