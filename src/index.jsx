import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, hashHistory} from 'react-router';
import App from './components/app';
import About from './components/About';
import Overview from './components/Overview';

import reducer from './reducer';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//import remoteActionMiddleware from './remote_action_middleware';

require('./style/main.scss');

/**
 * -----------------------------------------------------------------
 * If we now plug in this middleware to our Redux store, 
 * we should see all actions being logged. The middleware can be 
 * activated using an applyMiddleware function that Redux ships with. 
 * It takes the middleware we want to register, and returns a function that takes 
 * the createStore function. That second function will then create a store for us 
 * that has the middleware included in it:
 */
const createSoreWithMiddleware = applyMiddleware(
   //remoteActionMiddleware(socket) --> to be ADDED when API is connected.
)(createStore);
const store = createSoreWithMiddleware(reducer);
// -----------------------------------------------------------------




/**
 * The provider connects our component tree to a redux store.
 * That's why we wrap the Router component inside the Provider Component
 * This wrapping up enables us to make the mapping for individual component later.
 */
ReactDOM.render(
   
        <Router>
          <App />
        </Router>
      
  ,
  document.getElementById('app')
);