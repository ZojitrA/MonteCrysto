import axios from 'axios';
import * as LISTUtil from '../util/watchlist_util';
import * as USERUtil from '../util/user_api_util';
import * as PORTUtil from '../util/portfolio_util';


export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const RECEIVE_PORTFOLIOS = "RECEIVE_PORTFOLIOS";

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
USERUtil.fetchUser(user_id).then(data => {

  return (
    dispatch(receiveWatchLists(data.watchlist))
  );
  }
));

export const createPortfolio = (portfolio) => dispatch => (
  PORTUtil.createInstance(portfolio).then(portfolio => {
    return (
      dispatch(receivePortfolio(portfolio))
    )
  }));

export const fetchPortfolios = () => dispatch => (
  PORTUtil.fetchHistory().then(portfolios => {
    return (
      dispatch(receivePortfolios(portfolios))
    )
  })
)

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


export const receivePortfolio = (portfolio) =>{
  return(
    {
      type: RECEIVE_PORTFOLIO,
      portfolio
    }
  )
}

export const receivePortfolios = (portfolios) => {
  return(
    {
      type: RECEIVE_PORTFOLIOS,
      portfolios
    }
  )
}
