import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content } = Layout
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

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
    if (!this.state.collasped) {
      document.getElementById('logody').style['transform'] = 'scale(0.4)'
    } else {
      document.getElementById('logody').style['transform'] = 'scale(1)'
    }
  }
  componentWillMount() {
  }
  render() {
    return (
      <Layout className='container main'>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collasped}
        >
          <div className='logo'>
            <img src={require('../../../static/image/logo.png')} className='logoicon' id="logody"/>
          </div>
          <div className={`${style.menu} ${style.defaultcolor}`}>
            <Menu mode="inline" className={style.defaultcolor} theme="dark">
              <SubMenu key="user" className={style.defaultcolor} title={<span><Icon type="user"/><span>用户管理</span></span>}>
                <MenuItem key="user-list" className={style.defaultcolor}>
                  <Link to="/pc/use/list">用户列表</Link>
                </MenuItem>
                <MenuItem key="user-add" className={style.defaultcolor}>
                  <Link to="/pc/use/add">添加用户</Link>
                </MenuItem>
              </SubMenu>

              <SubMenu key="book" title={<span><Icon type="book"/><span>内容管理</span></span>}>
                <MenuItem key="book-list">
                  <Link to="/pc/pruductmanage/index">home页面管理</Link>
                </MenuItem>
                <MenuItem key="product-index-manage">
                  <Link to="/pc/pruductmanage/home">首页管理</Link>
                </MenuItem>
                <MenuItem key="book-add">
                  <Link to="/pc/test">test</Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} className='nav-header'>
            <Icon
              className='trigger'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <ul className="navigation bordered">
              <li>
                <a href="index-2.html" className="button">
                  <div className="icon">
                    <Icon type="desktop" />
                  </div>
                  <div className="name">Dashboard</div>
                </a>
              </li>
              <li>
                <a href="#" className="button yellow">
                  <div className="arrow"></div>
                  <div className="icon">
                    <Icon type="setting" />
                  </div>
                  <div className="name">UI Elements</div>
                </a>
              </li>
              <li>
                <a href="#" className="button green">
                  <div className="arrow"></div>
                  <div className="icon">
                    <Icon type="edit" />
                  </div>
                  <div className="name">Forms Stuff</div>
                </a>
              </li>
              <li>
                <a href="statistic.html" className="button red">
                  <div className="icon">
                    <Icon type="area-chart" />
                  </div>
                  <div className="name">Statistic</div>
                </a>
              </li>
              <li>
                <a href="#" className="button dblue">
                  <div className="arrow"></div>
                  <div className="icon">
                    <Icon type="database" />
                  </div>
                  <div className="name">Tables</div>
                </a>
              </li>
              <li>
                <a href="#" className="button purple">
                  <div className="arrow"></div>
                  <div className="icon">
                    <Icon type="inbox" />
                  </div>
                  <div className="name">Samples</div>
                </a>
              </li>
              <li>
                <a href="#" className="button orange">
                  <div className="arrow"></div>
                  <div className="icon">
                    <Icon type="cloud-o" />
                  </div>
                  <div className="name">Other</div>
                </a>
              </li>
            </ul>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
             {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}