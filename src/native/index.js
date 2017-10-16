import React, { Component } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import store from './config/store';
import Navigation from './config/router';

class App extends Component {
  state = {
    ready: true
  }

  componentDidMount() {
    /*
    persistStore(store, {
      storage: AsyncStorage,
      blacklist: ['router']
    }, () => {
      this.setState({ ready: true });
    });
    */
  }

  render() {
    if (!this.state.ready) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <Provider store={ store }>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
