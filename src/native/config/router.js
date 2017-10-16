import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions, DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Onboard from '../screens/Onboard';
import Today from '../screens/Today';
import Hourly from '../screens/Hourly';
import Daily from '../screens/Daily';
import Settings from '../screens/Settings';

const WeatherNavigation = TabNavigator({
  Today: {
    screen: Today
  },
  Hourly: {
    screen: Hourly
  },
  Daily: {
    screen: Daily
  }
});

const SettingsNavigation = DrawerNavigator({
  Weather: {
    screen: WeatherNavigation
  },
  Settings: {
    screen: Settings
  }
});

export const AppNavigation = StackNavigator({
  Onboard: {
    screen: Onboard
  },
  Weather: {
    screen: SettingsNavigation
  }
}, {
  headerMode: 'none'
});

@connect(
  ({ router }) => ({ router })
)

export default class Navigation extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { router, dispatch } = this.props;
    if (router.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    return (
      <AppNavigation navigation={addNavigationHelpers({
        state: this.props.router,
        dispatch: this.props.dispatch
      })} />
    );
  }
}