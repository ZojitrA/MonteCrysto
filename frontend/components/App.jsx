import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './SessionForms/signup_form_container';
import LogInFormContainer from './SessionForms/login_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import StockContainer from './stocks/stock_container';
import IndexContainer from './index/index_container';
import Favicon from 'react-favicon';
const App = () => (
  <div>
    <Favicon url="https://cdn2.iconfinder.com/data/icons/royal-crowns/512/royal-alphabet-crown-letter-english-m-512.png"/>
    <Switch>
      <Route exact path="/" component={GreetingContainer}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/stock/:ticker" component={StockContainer}/>
      <Route exact path="/stock" component={IndexContainer}/>
    </Switch>
  </div>
);

// <Route exact path="/login" component={LogInFormContainer} />
// <Route exact path="/signup" component={SignUpFormContainer} />
export default App;
