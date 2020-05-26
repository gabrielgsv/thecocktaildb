import React from 'react';
import { Router as RouterContainer } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
import history from './history';

import Router from './Router';

export default function App() {
  return (
    <Provider store={store}>
      <RouterContainer history={history}>
        <Router />
      </RouterContainer>
    </Provider>
  );
}
