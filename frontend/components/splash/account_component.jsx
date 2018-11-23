import {Link, withRouter} from 'react-router-dom';
import React from 'react';


class accountTab extends React.Component {

constructor(props){
  super(props);
}
  // const handleLogout = (callback) => {
  //   return (e) => {
  //     callback().then(() => {
  //       props.history.push("/");
  //     });
  //   };
  // };



  render() {

    if(!this.props.onOff){
      return null;
    }


    return (
    <section className="account-tab">
      <h1>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
      <div className="account-tab-section0">
        {this.props.currentUser.funds_usd} available for trading
      </div>
      <div className="account-tab-section1">
        <Link className="account-tab-links" to="/">Account</Link>
        <Link className="account-tab-links" to="/">Banking</Link>
        <Link className="account-tab-links" to="/">Settings</Link>
        <div/>
        <div className="account-tab-section2">
          <Link className="account-tab-links" to="/">Help</Link>
          <Link className="account-tab-links" to="/">Discourses</Link>
        </div>
      </div>
      <button
        className="account-tab-button"
        onClick={this.props.logout}>Log Out
      </button>
    </section>
  );
}
}

export default withRouter(accountTab);
