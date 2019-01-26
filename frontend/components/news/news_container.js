import {connect} from 'react-redux';


const mapStateToProps = (state) => {

  return {
    currentUser: state.entities.users[state.session.id],
    ticker: null
  };

};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
