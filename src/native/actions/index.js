import { NavigationActions } from 'react-navigation';

import * as actionTypes from './types';

/*
  export const SET_LOCATION_PASS = 'SET_LOCATION_PASS';
  export const SET_LOCATION_FAIL = 'SET_LOCATION_FAIL';
*/

export const getLocationFromCoords = ({ latitude, longitude }) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3000/api/location/coords', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          latitude,
          longitude
        })
      }).then((r) => r.json());

      if ('error' in response) {
        return dispatch({
          type: actionTypes.SET_LOCATION_FAIL,
          payload: {
            error: response.error.message
          }
        });
      }

      dispatch({
        type: actionTypes.SET_LOCATION_PASS,
        payload: response.data
      });

      dispatch(NavigationActions.navigate({
        routeName: 'Weather',
        params: {
          name: response.data.name
        }
      }));
    } catch (error) {
      console.log('error', error);
      return dispatch({
        type: actionTypes.SET_LOCATION_FAIL,
        payload: {
          error: 'Unexpected server error'
        }
      });
    }
  };
};

export const getLocationFromAddress = () => {
  return async (dispatch) => {

  };
};
