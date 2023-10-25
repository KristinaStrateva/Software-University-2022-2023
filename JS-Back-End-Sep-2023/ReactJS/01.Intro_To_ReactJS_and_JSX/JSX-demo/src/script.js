import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDomElement);

// const reactHeadingElement = React.createElement('h1', {}, 'Hello From JSX!');
// const secondHeading = React.createElement('h2', {}, 'This is the best syntax ever!');
// const header = React.createElement('header', {className: 'site-header'}, reactHeadingElement, secondHeading);

const headerJSX = (
    <header className='site-header'>
        <h1>Hello From JSX!</h1>
        <h2>This is the best syntax ever!</h2>
        <h3>JSX Rulez!</h3>
    </header>
);

root.render(headerJSX);