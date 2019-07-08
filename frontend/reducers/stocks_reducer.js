import { RECEIVE_STOCKS, RECEIVE_ALL_STOCKS, DELETE_STOCKS } from '../actions/stock_actions';

import merge from 'lodash/merge';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case DELETE_STOCKS:
      return {};
    case RECEIVE_STOCKS:
      return action.data;
    case RECEIVE_ALL_STOCKS:
      return action.data;
    default:
      return state;
  }
};

export default stocksReducer;
