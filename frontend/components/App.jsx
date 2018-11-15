import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './SessionForm/signup_form_container';
import LogInFormContainer from './SessionForm/login_form_container';
import {AuthRoute} from '../util/route_util'


const App = () => {
  return(

<div>
  <header>

    <h1>Monte Crysto</h1>

    <GreetingContainer />
  </header>
<switch>
  <AuthRoute path="/login" component={LogInFormContainer} />
  <AuthRoute path="/signup" component={SignUpFormContainer} />
</switch>

</div>

  )
};

// <Route exact path="/login" component={LogInFormContainer} />
// <Route exact path="/signup" component={SignUpFormContainer} />
export default App;
