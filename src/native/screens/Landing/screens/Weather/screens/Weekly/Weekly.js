import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Weekly extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.daily.time === nextProps.daily.time) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Weekly</Text>
      </View>
    );
  }
}

export default Weekly;