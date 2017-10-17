import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate } from 'redux-persist';

import thunk from 'redux-thunk';

import reducer from '../reducers';

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
  autoRehydrate()
));

if (module.hot) {
  module.hot.accept(() => {
    const nextReducer = require('../reducers').default;
    store.replaceReducer(nextReducer);
  });
}

export default store;