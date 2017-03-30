var React = require('react');
var ReactDOM = require('react-dom');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <div>Hello React</div>,
    document.getElementById('app')
);

require('./redux-example');