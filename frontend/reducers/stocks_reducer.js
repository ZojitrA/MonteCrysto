import { RECEIVE_STOCK } from '../actions/stock_actions';
import merge from 'lodash/merge';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCK:
      return merge({}, state, { [action.data.symbol]: action.data});
    default:
      return state;
  }
};

export default stocksReducer;
