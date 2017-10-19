import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Weather extends Component {
  render() {
    console.log('weather', this.props);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Weather</Text>
      </View>
    );
  }
}

export default Weather;