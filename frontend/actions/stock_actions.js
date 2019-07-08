import axios from 'axios';
import * as STOCKUtil from '../util/stock_util';


export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const DELETE_STOCKS = 'DELETE_STOCKS';
export const RECEIVE_ALL_STOCKS = 'RECEIVE_ALL_STOCKS';

const receiveStockData = data => {
  return ({
  type: RECEIVE_STOCKS,
  data: data
});
};
const receiveStocksData = data => {
  return ({
  type: RECEIVE_ALL_STOCKS,
  data: data
});
};

export const getStockBy = ticker => dispatch => (
STOCKUtil.searchStocks(ticker).then(data =>
  {
  return (
    dispatch(receiveStockData(data))
  );}, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getAllStocks = () => dispatch => (
STOCKUtil.fetchStocks().then(data =>
  {
  return (
    dispatch(receiveStocksData(data))
  );}, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
