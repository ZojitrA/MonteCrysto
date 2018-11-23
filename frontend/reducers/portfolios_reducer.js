import { RECEIVE_PORTFOLIO } from '../actions/watchlist_portfolio_actions';
import merge from 'lodash/merge';

const portfoliosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PORTFOLIO:
      return merge({}, state, { [action.data.user_id]: [action.data.assets]});
    default:
      return state;
  }
};

export default portfoliosReducer;
