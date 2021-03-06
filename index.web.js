import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import App from './src/App';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('sellers_client', () => RNRedux);
AppRegistry.runApplication('sellers_client', { rootTag: document.getElementById('react-app') });