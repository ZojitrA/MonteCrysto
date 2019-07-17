import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {getWatchlists} from '../../actions/watchlist_portfolio_actions';
import List from "./list";
import {getShare, getAllShares} from '../../actions/share_actions';
import { getStockBy, getAllStocks} from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user_id: state.session.id,
    watchlist: state.entities.watchlists,
    history: ownProps.history,
    shares: state.entities.shares,
    stocks: state.entities.stocks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllShares: (user_id) => dispatch(getAllShares(user_id)),
    getWatchlists: (user_id) => dispatch(getWatchlists(user_id)),
    getAllStocks: () => dispatch(getAllStocks())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
