import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Weather extends Component {
  static navigationOptions = (props) => {
    console.log(props);

    return {
      title: 'Location thing',
      headerRight: <Text>Yo</Text>
    };
  }

  render() {
    console.log('Weather');

    return (
      <View>
        <Text>Weather</Text>
      </View>
    );
  }
}

export default Weather;