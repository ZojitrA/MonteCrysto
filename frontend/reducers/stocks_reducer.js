import { RECEIVE_STOCK } from '../actions/stock_actions';
import { RECEIVE_WATCHLISTS, RECEIVE_WATCHLIST } from '../actions/watchlist_portfolio_actions';
import merge from 'lodash/merge';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WATCHLISTS:
      return merge({}, state, action.data.stocks);
    case RECEIVE_WATCHLIST:
      return merge({}, state, action.data.stocks);
    case RECEIVE_STOCK:
      return merge({}, state, { [action.data.ticker]: action.data});
    default:
      return state;
  }
};

export default stocksReducer;
