var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Frank';

ReactDOM.render(
    <Greeter name={firstName} msg="Hi guys!"/>,
    document.getElementById('app')
);