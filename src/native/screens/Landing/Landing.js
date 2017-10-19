import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NativeRouter, Redirect, Route } from 'react-router-native';
import Stack from 'react-router-native-stack';

import Weather from './screens/Weather';
import Settings from './screens/Settings';

@connect((state) => (state))

class Landing extends Component {
  render() {
    console.log('landing', this.props);

    const { position: { name, coords } } = this.props;

    if (name === null || coords === null) {
      return <Redirect to="/onboard" />;
    }

    return (
      <Stack
        gestureEnabled={false}
      >
        <Route
          exact
          path="/"
          component={ Weather }
        />

        <Route
          path="/settings"
          component={ Settings }
        />
      </Stack>
    );
  }
}

export default Landing;