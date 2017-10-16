import { combineReducers } from 'redux';

import locationReducer from './location';
import navigationReducer from './navigation';
import settingsReducer from './settings';
import weatherReducer from './weather';

export default combineReducers({
  location: locationReducer,
  router: navigationReducer,
  settings: settingsReducer,
  forecast: weatherReducer
});
