import React from 'react';

import {Route, Switch, Redirect} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';


import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import test from 'bundle-loader?lazy&name=test!pages/Test/test'
import home from 'bundle-loader?lazy&name=homeIndex!pages/Home/index'
import PcLayout from '../components/Pc/Menu'
import useList from 'bundle-loader?lazy&name=useList!components/Pc/UseManage/list'
import PcProductManageIndex from 'bundle-loader?lazy&name=productmanageindex!components/Pc/ProductManage/index'

// 按需加载 组件
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
      <Route path="/pc" render={()=>
        <PcLayout>
          <Switch>
            <Route path="/pc/use/add" component={createComponent(test)}/>
            <Route path="/pc/use/list" component={createComponent(useList)}/>
            <Route path="/pc/pruductmanage/index" component={createComponent(PcProductManageIndex)}/>
            <Redirect from="/pc" to="/pc/use/add"/>
          </Switch>
        </PcLayout>
      }>
      </Route>
    </Switch>
  </div>
);
