import React, { Component } from 'react';
import { NativeRouter, Switch, Route } from 'react-router-native';
// import { Navigation, Card } from 'react-router-navigation';

import Landing from '../../screens/Landing';
import Onboard from '../../screens/Onboard';

// routing
/*
  // landing
    // weather
      // current
      // daily
      // hourly

    // settings

  // onboard
*/

class Root extends Component {
  render() {
    return (
      <NativeRouter>

        <Switch>
          <Route
            exact
            path="/"
            component={ Landing }
          />

          <Route
            path="/onboard"
            component={ Onboard }
          />
        </Switch>

      </NativeRouter>
    );
  }
}

export default Root;