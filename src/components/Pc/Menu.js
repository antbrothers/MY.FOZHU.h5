import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

import index from '../../pages/Pc/Index'
import style from './Menu.scss'
import 'antd/dist/antd.css'
export default class MyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collasped: false
    }
  }
  toggle = () => {
    this.setState({
      collasped: !this.state.collasped
    })
  }
  render() {
    return (
      <Layout className={style.main}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collasped}
        >
          <div className={style.logo} />
          <div className={style.menu}>
            <Menu mode="inline" theme="dark">
              <SubMenu key="user" title={<span><Icon type="user"/><span>用户管理</span></span>}>
                <MenuItem key="user-list">
                  <Link to="/pc/use/list">用户列表</Link>
                </MenuItem>
                <MenuItem key="user-add">
                  <Link to="/pc/use/add">添加用户</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="book" title={<span><Icon type="book"/><span>图书管理</span></span>}>
                <MenuItem key="book-list">
                  <Link to="/book/list">图书列表</Link>
                </MenuItem>
                <MenuItem key="book-add">
                  <Link to="/pc/test">test</Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={style.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
             {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}