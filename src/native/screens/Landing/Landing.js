import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NativeRouter, Redirect, Route } from 'react-router-native';
import Stack from 'react-router-native-stack';

import * as actions from '../../actions';

import Weather from './screens/Weather';
import Settings from './screens/Settings';

@connect((state) => (state))

class Landing extends Component {
  fetchWeather = () => {
    const { position: { name, coords } } = this.props;
    this.props.dispatch(actions.fetchWeather(coords));
  }

  render() {
    const { position: { name, coords }, settings, forecast } = this.props;

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
          render={() => (
            <Weather
              name={name}
              forecast={forecast}
              fetchWeather={this.fetchWeather}
            />
          )}
        />

        <Route
          path="/settings"
          render={() => (
            <Settings
              settings={settings}
            />
          )}
        />
      </Stack>
    );
  }
}

export default Landing;