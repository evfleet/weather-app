/* eslint-disable handle-callback-err */
import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';

import * as actions from '../../actions';

@connect(
  ({ location }) => ({ location }),
  (dispatch) => ({ actions: bindActionCreators({
    getLocationFromCoords: actions.getLocationFromCoords,
    getLocationFromAddress: actions.getLocationFromAddress
  }, dispatch) })
)

class Onboard extends Component {
  state = {
    input: {
      value: '',
      error: null
    },
    geolocation: {

    }
  }

  componentWillMount() {
    const { location: { name, coords } } = this.props;

    if (name && coords) {
      this.props.dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Weather' })
        ]
      }));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true;
    }
    return false;
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
      ({ coords }) => {
        if (coords) {
          this.props.actions.getLocationFromCoords(coords);
        }

        console.log('position', coords);
      },
      (error) => {
        console.log('error', error);
      },
      {
        enableHighAccuracy: true
      }
    );
  }

  handleSubmitPress = () => {
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'Weather' }));
  }

  render() {
    const { input: { value, error } } = this.state;

    console.log(this.props);

    return (
      <View style={styles.container}>
        <Text>Onboard</Text>

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
    backgroundColor: '#FFFFFF'
  }
});

export default Onboard;