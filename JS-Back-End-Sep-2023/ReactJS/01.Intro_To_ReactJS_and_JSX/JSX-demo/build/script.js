import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// const reactHeadingElement = React.createElement('h1', {}, 'Hello From JSX!');
// const secondHeading = React.createElement('h2', {}, 'This is the best syntax ever!');
// const header = React.createElement('header', {className: 'site-header'}, reactHeadingElement, secondHeading);

var headerJSX = React.createElement(
    'header',
    { className: 'site-header' },
    React.createElement(
        'h1',
        null,
        'Hello From JSX!'
    ),
    React.createElement(
        'h2',
        null,
        'This is the best syntax ever!'
    ),
    React.createElement(
        'h3',
        null,
        'JSX Rulez!'
    )
);

root.render(headerJSX);