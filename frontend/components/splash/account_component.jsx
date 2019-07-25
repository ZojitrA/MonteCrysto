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

    let name

    if(this.props.currentUser){
      name = this.props.currentUser.first_name
    }



    return (
    <section className="account-tab">
      <div>
      <h1>Welcome {name}!</h1>

      <br></br>
      <a href="https://amirsojitra.nyc" style={{color: "purple"}}>Meet Developer</a>

      <br></br>
      <br></br>
        <button
          className="account-tab-button"
          onClick={this.props.logout}>Log Out
        </button>

      </div>
    </section>
  );
}
}

export default withRouter(accountTab);
