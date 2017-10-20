import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Hourly extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.hourly.time === nextProps.hourly.time) {
      return false;
    }
    return true;
  }

  render() {
    const { hourly } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hourly</Text>
      </View>
    );
  }
}

export default Hourly;