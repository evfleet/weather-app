import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NativeRouter, Redirect, Route, Switch } from 'react-router-native';

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
      <Switch>
        <Route
          exact
          path="/"
          component={ Weather }
        />

        <Route
          path="/settings"
          component={ Settings }
        />
      </Switch>
    );
  }
}

export default Landing;