import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './SessionForm/signup_form_container';
import LogInFormContainer from './SessionForm/login_form_container';


const App = () => {
  return(

<div>
  <header>

    <h1>Monte Crysto</h1>

    <GreetingContainer />
  </header>

  <Route path="/login" component={LogInFormContainer} />
  <Route path="/signup" component={SignUpFormContainer} />

</div>

  )
};

// <Route exact path="/login" component={LogInFormContainer} />
// <Route exact path="/signup" component={SignUpFormContainer} />
export default App;
