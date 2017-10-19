import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

import store from './config/store';

import Root from './components/Root';
import Loading from './components/Loading';

class App extends Component {
  state = {
    isReady: false
  }

  componentWillMount() {
    AsyncStorage.clear();
  }

  componentDidMount() {
    persistStore(store, {
      storage: AsyncStorage
    }, () => {
      this.setState({ isReady: true });
    });
  }

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return (
        <Loading />
      );
    }

    return (
      <Provider store={ store } >
        <Root />
      </Provider>
    );
  }
}

export default App;
