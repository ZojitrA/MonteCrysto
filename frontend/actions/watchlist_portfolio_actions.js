import axios from 'axios';
import * as LISTUtil from '../util/watchlist_util';


export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';

const receiveWatchLists = data => {
  return ({
  type: RECEIVE_WATCHLISTS,
  data: data
});
};
const receiveWatchList = data => {
  return ({
  type: RECEIVE_WATCHLIST,
  data: data
});
};

export const getWatchlists = user_id => dispatch => (
LISTUtil.fetchLists(user_id).then(data => {

  return (
    dispatch(receiveWatchLists(data))
  );
  }
));

export const addToList = (id, stock) => dispatch => (
LISTUtil.addStockToList(id, stock).then(data => {
  return (
    dispatch(receiveWatchList(data))
  );
  })
);

export const dropFromList = (id, stock) => dispatch => (
LISTUtil.removeStockFromList(id, stock).then(data => {
  return (
    dispatch(receiveWatchList(data))
  );
  })
);
