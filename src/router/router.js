import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';


import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import test from 'bundle-loader?lazy&name=test!pages/Test/test'
import home from 'bundle-loader?lazy&name=homeIndex!pages/Home/index'
import pcLayout from 'bundle-loader?lazy&name=menu!components/Pc/Menu'

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
      <Route path="/test" component={createComponent(test)}/>
      <Route path="/home" component = {createComponent(home)}/>
      <Route path="/pc" render={() =>
        <pcLayout>
          <Switch>
            <Route path="/pc/index" ></Route>
          </Switch>
        </pcLayout>
      }></Route>
    </Switch>
  </div>
);
