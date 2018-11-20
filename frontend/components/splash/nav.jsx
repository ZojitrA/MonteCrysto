import {Link} from 'react-router-dom';
import React from 'react';
import AccountComponent from './account_component';
import NotificationsComponent from './notifications_component';


class Splash extends React.Component {

  constructor(props){
    super(props);
    this.state = {account: false, notifications: false};

    this.toggle = this.toggle.bind(this);
  }


  toggle(field, other) {
      if(this.state[field] === true){
        this.setState({
          [field]: false
        });
      } else{
        this.setState({
          [field]: true,
          [other]: false
        })
      }
    }


  render(){
    return(
      <section className="splash-nav">
          <Link className="splash-nav-buttons" to="/">Home</Link>
          <button className="splash-nav-buttons" onClick={() => this.toggle("notifications", "account")}>Notifications</button>
          <NotificationsComponent
            onOff={this.state.notifications}
            currentUser={this.props.currentUser}
            />
          <button className="splash-nav-buttons" onClick={() => this.toggle("account", "notifications")}>Account</button>
          <AccountComponent
            onOff={this.state.account}
            currentUser={this.props.currentUser}
            logout={this.props.logout}
            />
      </section>
    );
  }
}


  //   if(this.state.notifications){
  //     return (
  //       <NotificationComponent currentUser={this.props.currentUser}/>
  //     )
  // }}

  // {
  //     if(this.state.account){
  //       return (
  //         <AccountComponent/ currentUser={this.props.currentUser}>
  //       )
  //   }}

export default Splash;
