var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Page One</IndexLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navigation;
