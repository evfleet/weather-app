import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import NavigationBar from 'react-native-navbar';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import * as actions from '../../../../actions';

import Current from './screens/Current';
import Hourly from './screens/Hourly';
import Weekly from './screens/Weekly';

class Weather extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'current', title: 'Current' },
      { key: 'hourly', title: 'Hourly' },
      { key: 'weekly', title: 'Forecast' }
    ]
  }

  componentDidMount() {
    this.props.fetchWeather();
  }

  handleIndexChange = (index) => {
    this.setState({ index });
  }

  renderFooter = (props) => <TabBar {...props} />

  renderScene = ({ route }) => {
    const { forecast } = this.props;

    switch (route.key) {
      case 'current':
        return <Current currently={forecast.currently} />;

      case 'hourly':
        return <Hourly hourly={forecast.hourly} />;

      case 'weekly':
        return <Weekly daily={forecast.daily} />;

      default:
        return null;
    }
  }

  render() {
    console.log('weather', this.props);

    const { name, forecast } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          tintColor="#000033"
          title={{ title: name }}
        />

        <TabViewAnimated
          style={{ flex: 1 }}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderFooter={this.renderFooter}
          onIndexChange={this.handleIndexChange}
        />
      </View>
    );
  }
}

export default Weather;