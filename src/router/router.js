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
import PcProducManageHome from 'bundle-loader?lazy&name=prudectmangehome!components/Pc/ProductManage/home'
import CompanyInfo from 'bundle-loader?lazy&name=companyinfo!pages/Company/Index'

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
            <Route path="/pc/pruductmanage/home" component={createComponent(PcProducManageHome)}/>
            <Redirect from="/pc" to="/pc/pruductmanage/index"/>
          </Switch>
        </PcLayout>
      }>
      </Route>
      <Route path="/companyinfo" component={createComponent(CompanyInfo)}/>
    </Switch>
  </div>
);
