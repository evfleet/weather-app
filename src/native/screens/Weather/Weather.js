import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

@connect(
  ({ location }) => ({ location })
)

class Weather extends Component {
  static navigationOptions = (props) => ({
    title: props.navigation.state.params.name
  })

  render() {
    return (
      <View>
        <Text>Weather</Text>
      </View>
    );
  }
}

export default Weather;