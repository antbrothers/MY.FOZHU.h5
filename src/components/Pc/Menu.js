import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu;
import index from '../../pages/Pc/Index'
import styleCSS from './Menu.scss'
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
      /*{<div>
        <Link to='/pc/index'>
          Menu
        </Link>
        <Route path="/pc/index" component={index}/>
      </div>}*/
      <Layout className={styleCSS.main}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collasped}
        >
          <div className={styleCSS.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="4">Tom</Menu.Item>
              <Menu.Item key="5">Bill</Menu.Item>
              <Menu.Item key="6">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styleCSS.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}