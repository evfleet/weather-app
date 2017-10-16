import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate } from 'redux-persist';

import thunk from 'redux-thunk';

import reducer from '../reducers';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
  autoRehydrate()
));

export default store;