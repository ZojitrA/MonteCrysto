import axios from 'axios';
import * as NewsUtil from '../util/News_util';


export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';

const receiveStockData = data => {
  return ({
  type: RECEIVE_ALL_NEWS,
  data: data
});
};

export const getStockBy = ticker => dispatch => (
STOCKUtil.getStockBy(ticker).then(data =>
  {
  return (
    dispatch(receiveStockData(data))
  );}, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);
