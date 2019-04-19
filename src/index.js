import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-138661181-1', { standardImplementation: true });

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
