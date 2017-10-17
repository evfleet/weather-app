import { AppNavigation } from '../config/router';

const initialState = AppNavigation.router.getStateForAction(AppNavigation.router.getActionForPathAndParams('Landing'));

export default (state = initialState, action) => {
  const nextState = AppNavigation.router.getStateForAction(action, state);
  return nextState || state;
};