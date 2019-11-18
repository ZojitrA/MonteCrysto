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

    let welcome

    if(this.props.currentUser && this.props.page !== "stock"){
      welcome = <div>
          <h1 style={{color: "darkgrey", fontWeight: "700"}}>Welcome {this.props.currentUser.first_name}!</h1>
          <br/>
      </div>

    }



    return (
    <section className="account-tab">
      <div>
      {welcome}


      <a href="https://amirsojitra.nyc" style={{color: "darkgrey", fontWeight:"700"}}>Meet Developer</a>

      <br></br>
      <br></br>
        <button
          style={{color: "red"}}
          className="account-tab-button"
          onClick={this.props.logout}>Log Out
        </button>

      </div>
    </section>
  );
}
}

export default withRouter(accountTab);
