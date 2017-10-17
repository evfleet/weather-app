/* eslint-disable handle-callback-err */
import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';

import * as actions from '../../actions';

@connect(
  ({ ui, location }) => ({ ui, location })
)

class Landing extends Component {
  state = {
    isReady: false,
    input: {
      value: '',
      error: null
    },
    geolocation: {

    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { location: { name, coords } } = nextProps;

    if (name && coords) {
      setTimeout(() => {
        this.props.dispatch(NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: 'Weather',
              params: {
                name
              }
            })
          ]
        }));
      }, 1500);
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
      ({ coords }) => {
        if (coords) {
          this.props.dispatch(actions.getLocationFromCoords(coords));
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  handleSubmitPress = () => {
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'Weather' }));
  }

  render() {
    const { isReady, input: { value, error } } = this.state;
    const { ui: { rehydrated } } = this.props;

    console.log(this.props);

    return (
      <View style={styles.container}>
        {!rehydrated && !isReady ? (
          <Text>Loading</Text>
        ) : (
          <View>
            <Text>Landing</Text>

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
        )}
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

export default Landing;