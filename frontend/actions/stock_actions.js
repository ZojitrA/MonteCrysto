import axios from 'axios';
import * as STOCKUtil from '../util/stock_util';


export const RECEIVE_STOCK = 'RECEIVE_STOCK';

const receiveStockData = data => {
  return ({
  type: RECEIVE_STOCK,
  data: data
});
};

export const getStockBy = ticker => dispatch => (
STOCKUtil.getStockBy(ticker).then(data => {
  return (
    dispatch(receiveStockData(data))
  );}, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
