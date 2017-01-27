var Greeter = React.createClass({
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
    onButtonClick: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        this.refs.name.value = '';
        if (typeof name === 'string' && name.length > 0) {

            this.setState({
                name: name
            });
        }

    },
    render: function () {
        var name = this.state.name;
        var msg = this.props.msg;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{msg}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        )
    }
});

var firstName = 'Frank';

ReactDOM.render(
    <Greeter name={firstName} msg="yous uck lol"/>,
    document.getElementById('app')
);