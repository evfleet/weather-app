/* eslint-disable handle-callback-err */
import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

@connect(({ position }) => ({ position }))

class Onboard extends Component {
  state = {
    input: {
      value: '',
      error: null
    }
  }

  handleInputChange = (value) => {
    this.setState({
      ...this.state,
      input: {
        value,
        error: null
      }
    });
  }

  handleLocatePress = () => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        if (coords) {
          await this.props.dispatch(actions.getLocationFromCoords(coords));
          this.props.history.replace('/');
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  handleSubmitPress = () => {

  }

  render() {
    const { input: { value, error } } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles['input__wrapper']}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={this.handleInputChange}
          />
        </View>

        <Button
          title="Search"
          onPress={this.handleSubmitPress}
        />

        <Button
          title="Find Location"
          onPress={this.handleLocatePress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  'input__wrapper': {
    width: 100,
    height: 40
  },
  input: {
    flex: 1,
    backgroundColor: '#CCCCCC'
  }
});

export default Onboard;