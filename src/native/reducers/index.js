import { combineReducers } from 'redux';

import locationReducer from './location';
import settingsReducer from './settings';
import weatherReducer from './weather';

export default combineReducers({
  position: locationReducer,
  settings: settingsReducer,
  forecast: weatherReducer
});
