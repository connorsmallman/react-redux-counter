import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './state/create';
import Counters from './containers/Counters';
import './index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Counters />
  </Provider>,
  document.getElementById('root')
);
