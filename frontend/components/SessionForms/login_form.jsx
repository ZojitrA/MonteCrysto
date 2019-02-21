import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.action(this.state);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demo(){
    this.setState({email: "mclovin@mclovin.com", password: "startrek"});
    this.props.action(this.state);
  }

  render() {
    return (
      <section className="login-section">
        <img className="image-blob" src={window.blob}></img>



      <div className="login-form-container">
        <h1 className="logintitle">Welcome to <Link className="loginpagelinktolanding" to="/">Montecrysto</Link></h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <br/>
          Please {this.props.formType} or {this.props.navLink}

          <div className="login-form">
            <br/>
            <label>email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value="Sign In" />
            <br/>
          <button className="session-submit" onClick={this.demo}> Demo </button>
          </div>
        </form>
      </div>
    </section>
    );
  }
}

export default withRouter(LoginForm);
