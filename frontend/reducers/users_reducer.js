import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_UPDATED_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.user.id]: action.currentUser.user });
    case RECEIVE_UPDATED_USER:
      newState = merge({},state);
      newState[action.currentUser.user.id] = action.currentUser.user;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
