import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';

import Root from './containers/Root';
import './styles/index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
