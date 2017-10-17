import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import store from './config/store';
import Navigation from './config/router';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
