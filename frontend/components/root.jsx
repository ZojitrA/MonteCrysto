import React from 'react';
import {provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

const Root = (props) => {

  <Provider store={props.store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>


}
