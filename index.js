import React from 'react'
import { AppRegistry } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './src/redux-flow/reducers/index'
import App from './App';

const store = createStore(reducer)

const renderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('rnentriatodolist', () => renderApp);
