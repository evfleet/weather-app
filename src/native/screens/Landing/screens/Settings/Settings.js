import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class Settings extends Component {
  render() {
    console.log('settings');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>

        <Button title="Weather" onPress={() => this.props.history.goBack()} />

      </View>
    );
  }
}

export default Settings;