var React = require('react');


var About = (props) => {
    return (
        <div>
        <h1 className="text-center">About</h1>
            <p>This is a weather application built on React with Docker Deploment.</p>
            <p>
                Here are some of the tools used:
            </p>
            <ul>
                <li>
                    <a href="https://github.com/facebook/react">React</a>
                </li>
            </ul>
        </div>
    );
}

module.exports = About;