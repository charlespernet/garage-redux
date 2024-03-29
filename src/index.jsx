import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import { reducer as formReducer } from 'redux-form'; 

import '../assets/stylesheets/application.scss';

import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';

import carsReducer from './reducers/cars_reducer';

const reducers = combineReducers({
  garageName: (state = 'Chez Regis', action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/cars/new" exact component={CarsNew} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
