import axios from 'axios';
import * as STOCKUtil from '../util/stock_util';


export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const DELETE_STOCKS = 'DELETE_STOCKS';
export const RECEIVE_ALL_STOCKS = 'RECEIVE_ALL_STOCKS';
export const RECEIVE_ALL_STOCKS_DATA = 'RECEIVE_ALL_STOCKS_DATA';

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

const receiveStocksExternalData = data => {
  return ({
  type: RECEIVE_ALL_STOCKS_DATA,
  data: data
});
};

export const getAllStocksData = (syms) => dispatch => (
STOCKUtil.fetchStocksData(syms).then(data =>
  {
  return (
    dispatch(receiveStocksExternalData(data))
  );}, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);


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
