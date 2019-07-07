import { RECEIVE_WATCHLISTS, RECEIVE_WATCHLIST } from '../actions/watchlist_portfolio_actions';
import merge from 'lodash/merge';

const watchlistsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WATCHLISTS:
      return merge({}, state, action.data);
    case RECEIVE_WATCHLIST:
      return merge({}, state, action.data);
    default:
      return state;
  }
};

export default watchlistsReducer;
