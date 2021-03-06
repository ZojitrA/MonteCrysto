
import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import stocksReducer from './stocks_reducer';
import watchlistsReducer from './watchlists_reducer';
import portfoliosReducer from './portfolios_reducer';
import sharesReducer from './shares_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer,
  watchlists: watchlistsReducer,
  portfolios: portfoliosReducer,
  shares: sharesReducer,
});

export default entitiesReducer;
