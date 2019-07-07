import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],
    ticker: null
  };

};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getWatchlists: (user_id) => dispatch(getWatchlists(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
