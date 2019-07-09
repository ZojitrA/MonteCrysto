import {connect} from 'react-redux';
import News from './stocknews'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    ticker: ownProps.ticker
  };

};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
