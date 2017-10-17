import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import Onboard from '../screens/Onboard';
import Weather from '../screens/Weather';
import Settings from '../screens/Settings';

const SettingsNavigation = StackNavigator({
  Weather: {
    screen: Weather
  },
  Settings: {
    screen: Settings
  }
}, {
  mode: 'modal'
});

export const AppNavigation = StackNavigator({
  Onboard: {
    screen: Onboard
  },
  Weather: {
    screen: SettingsNavigation
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
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