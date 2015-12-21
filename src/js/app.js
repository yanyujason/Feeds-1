const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const _ = require('lodash');

const Page = require('./components/Page');

$(function () {
    ReactDOM.render(<Page />, document.getElementById('container'));
});
