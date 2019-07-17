import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';
import {addToList, dropFromList, getWatchlists} from '../../actions/watchlist_portfolio_actions';
import {getShare, getAllShares} from '../../actions/share_actions';

const mapStateToProps = (state) => {

  let currentUser = state.entities.users[state.session.id];
  return {
    currentUser: currentUser,
    ticker: null,
    stocks: state.entities.stocks,
    shares: state.entities.shares

  };

};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getAllShares: (user_id) => dispatch(getAllShares(user_id)),
  getWatchlists: (user_id) => dispatch(getWatchlists(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
