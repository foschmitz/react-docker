var React = require('react');
var ReactDOM = require('react-dom');

var GreeterMessage = React.createClass({

    render: function () {
        var name = this.props.name;
        var msg = this.props.msg;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{msg}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var msg = this.refs.msg.value;

        var updates = {};

        if (typeof name === 'string' && name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }


        if (typeof msg === 'string' && msg.length > 0) {
            this.refs.msg.value = '';
            updates.msg = msg;
        }

        this.props.onNewData(updates);

    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div><input type="text" placeholder="Enter name" ref="name"/></div>
                <div><textarea placeholder="Enter message" ref="msg"/></div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
});

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            msg: 'This is from the component!'
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            msg: this.props.msg
        };
    },
    handleNewData: function (updates) {
        this.setState(updates)
    },
    render: function () {
        var name = this.state.name;
        var msg = this.state.msg;
        return (
            <div>
                <GreeterMessage name={name} msg={msg}/>
                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        )
    }
});

var firstName = 'Frank';

ReactDOM.render(
    <Greeter name={firstName} msg="you suck lol"/>,
    document.getElementById('app')
);