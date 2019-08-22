import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {getWatchlists} from '../../actions/watchlist_portfolio_actions';
import Index from "./index";
import {getShare, getAllShares} from '../../actions/share_actions';
import { getStockBy, getAllStocks, getAllStocksData} from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user_id: state.session.id,

    history: ownProps.history,

    stocks: state.entities.stocks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    getAllStocks: () => dispatch(getAllStocks()),
    getAllStocksData: (syms) => dispatch(getAllStocksData(syms))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
