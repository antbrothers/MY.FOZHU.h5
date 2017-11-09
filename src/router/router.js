import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';


import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import test from 'bundle-loader?lazy&name=test!pages/Test/test'
import home from 'bundle-loader?lazy&name=homeIndex!pages/Home/index'

const createComponent = (component) => () => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component/> : <Loading/>
    }
  </Bundle>
);

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={createComponent(UserInfo)}/>
      <Route exact path="/test" component={createComponent(test)}/>
      <Route exact path="/home" component = {createComponent(home)}/>

    </Switch>
  </div>
);
