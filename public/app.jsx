var GreeterMessage = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            msg: 'This is from the component!'
        }
    },
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    render: function () {
        var name = this.state.name;
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

        if (typeof name === 'string' && name.length > 0) {
            this.refs.name.value = '';
            this.props.onNewName(name);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
        )
    }
});

var Greeter = React.createClass({

    handleNewName: function (name) {
        this.setState({
            name: name
        })
    },
    render: function () {
        return (
            <div>
                <GreeterMessage/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        )
    }
});

var firstName = 'Frank';

ReactDOM.render(
    <Greeter name={firstName} msg="yous uck lol"/>,
    document.getElementById('app')
);