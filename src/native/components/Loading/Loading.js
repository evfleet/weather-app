import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>Loading</Text>
      </View>
    );
  }
}

export default Loading;