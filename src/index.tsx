import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
=======
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
>>>>>>> e18c012aee1be1136c68ef08c1b489124c98d3c9
  </React.StrictMode>,
  document.getElementById('root')
);
