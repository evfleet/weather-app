import { combineReducers } from 'redux';

import locationReducer from './location';
import navigationReducer from './navigation';
import settingsReducer from './settings';
import uiReducer from './ui';
import weatherReducer from './weather';

export default combineReducers({
  ui: uiReducer,
  location: locationReducer,
  router: navigationReducer,
  settings: settingsReducer,
  forecast: weatherReducer
});
