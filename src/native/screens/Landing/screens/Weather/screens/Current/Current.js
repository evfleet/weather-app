import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Current extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.currently.time === nextProps.currently.time) {
      return false;
    }
    return true;
  }

  render() {
    const { currently } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Current</Text>
      </View>
    );
  }
}

export default Current;