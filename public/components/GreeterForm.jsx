var React = require('react');

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

module.exports = GreeterForm;