import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {getWatchlists} from '../../actions/watchlist_portfolio_actions';
import List from "./list";

const mapStateToProps = (state, ownProps) => {
  return {
    user_id: state.session.id,
    watchlist: state.entities.watchlists,
    history: ownProps.history
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWatchlists: (user_id) => dispatch(getWatchlists(user_id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
