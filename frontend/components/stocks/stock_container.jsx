import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import {addToList, dropFromList, getWatchlists} from '../../actions/watchlist_portfolio_actions';
import {getShare, getAllShares} from '../../actions/share_actions';
import Stock from './stock';

const mapStateToProps = (state, ownProps) => {

  let currentUser = state.entities.users[state.session.id];
  let email = currentUser.email;


  return {
    currentUser: currentUser,
    user_id: state.session.id,
    ticker: ownProps.match.params.ticker,
    watchlist_id: state.entities.watchlists.id,
    watchlist: state.entities.watchlists,
    stocks: state.entities.stocks,
    shares: state.entities.shares
  };

};
// current_stock_ids: current_stock_ids

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  getWatchlists: (user_id) => dispatch(getWatchlists(user_id)),
  addToList: (id, ticker) => dispatch(addToList(id, ticker)),
  dropFromList: (id, ticker) => dispatch(dropFromList(id, ticker)),
  getAllShares: (user_id) => dispatch(getAllShares(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stock);
