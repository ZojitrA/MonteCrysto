import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
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

  render() {
    return (
      <div className="signup-form">
<Link to={"/"}><img className="logo" src={window.logo}></img></Link>
        <h1 className="groove-title">Let's learn to fly.</h1>

          <p className="signup-subtitle">High speed trading. Now for everyone.</p>

      <div className="signup-form-container">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <br/>

          <div className="signup-form-holder">

            <section className="signup-name-inputs">
              <label>First Name:
                <input type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')}
                  className="signup-input0"
                  />
              </label>
              <br/>
              <label>Last Name:
                <input type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')}
                  className="signup-input0"
                  />
              </label>
            </section>
            <br/>
            <section className="signup-credential-inputs">
              <label>Email Address:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signup-input"
                  />
              </label>
              <br/>
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input"
                  />
              </label>
            </section>
            <br/>
            <input className="session-submit" type="submit" value="Continue" />
          </div>
        </form>
      </div>

    </div>

    );
  }
}

export default withRouter(SignupForm);
