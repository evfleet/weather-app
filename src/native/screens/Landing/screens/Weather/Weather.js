import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import NavigationBar from 'react-native-navbar';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Current from './screens/Current';
import Hourly from './screens/Hourly';
import Weekly from './screens/Weekly';

class Weather extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Current' },
      { key: '2', title: 'Hourly' },
      { key: '3', title: 'Weekly' }
    ]
  }

  handleIndexChange = (index) => {
    this.setState({ index });
  }

  renderFooter = (props) => <TabBar {...props} />

  renderScene = SceneMap({
    '1': Current,
    '2': Hourly,
    '3': Weekly
  })

  render() {
    console.log('weather', this.props);

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          tintColor="#000033"
          title={{ title: 'Hello' }}
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