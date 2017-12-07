import React, {Component} from 'react'
import Style from './Scss/index.scss'
import Highcharts from 'highcharts'
import {Table, Icon, Divider} from 'antd'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
  width: 360,
}, {
  title: 'Action',
  key: 'action',
  width: 100,
  render: (text, record) => (
    <span className="action-main">
      <div className="action-icon-cont green-bg">
        <Icon type="edit" className="action-icon"/>
      </div>
      <div className="action-icon-cont red-bg">
        <Icon type="delete" className="action-icon"/>
      </div>
    </span>
  ),
}];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}
const expandedRowRender = record => <p>{record.description}</p>;

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chartOptions: {
        title: {
          text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
        },
        subtitle: {
          text: '数据来源：thesolarfoundation.com'
        },
        yAxis: {
          title: {
            text: '就业人数'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },
        series: [{
          name: '安装，实施人员',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
          name: '工人',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
          name: '销售',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
          name: '项目开发',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
          name: '其他',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      },
      tableForm: {
        bordered: false,
        loading: false,
        pagination: false,
        size: 'default',
        expandedRowRender,
        rowSelection: {},
        scroll: undefined,
      }
    }
  }

  componentDidMount() {
    // 在highcharts 加载之后加载功能模块
    require('highcharts/modules/exporting')(Highcharts)
    // 创建图表
    Highcharts.chart('container', this.state.chartOptions)
  }

  render() {
    return (
      <div className={Style.pruductmanage}>
        <div className="page-header">
          <div className="icon">
            <Icon type="arrow-right"/>
          </div>
          <h1>Dashboard
            <small>METRO STYLE ADMIN PANEL</small>
          </h1>
        </div>
        <div className="clearfoat"></div>
        <div className="row-fluid">
          <div className="span12">
            <div className="widgets">
              <div className="widget blue value">
                <div className="left">60%</div>
                <div className="right">
                  $1,530 amount paid<br/>
                  $2,102 in queue<br/>
                  $11,100 total taxes
                </div>
                <div className="bottom">
                  <a href="#">Invoices statistics</a>
                  <Icon type="right-circle-o" className="right-icon"/>
                </div>
              </div>
              <div className="widget green icon">
                <div className="left">
                  <div className="icon">
                    <Icon type="cloud-download-o" className="download-icon"/>
                  </div>
                </div>
                <div className="right">
                  <table width="100%">
                    <tbody>
                    <tr>
                      <td>HDD</td>
                      <td>4.5 / 250 GB</td>
                    </tr>
                    <tr>
                      <td>MySQL</td>
                      <td>1.8 / 10 GB</td>
                    </tr>
                    <tr>
                      <td>Databases</td>
                      <td>1 / 5</td>
                    </tr>
                    <tr>
                      <td>E-mails</td>
                      <td>5 / 15</td>
                    </tr>
                    <tr>
                      <td>Tickets</td>
                      <td>2</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bottom">
                  <a href="#">Server information</a>
                  <Icon type="right-circle-o" className="right-icon"/>
                </div>
              </div>
              <div className="widget orange chart nmr">
                <div className="left">
                  <div className="icon">
                    <Icon type="bar-chart" className="chart-view"/>
                  </div>
                </div>
                <div className="right">
                  65% New <br/>
                  35% Returning <br/>
                  00:05:12 Average time on site
                </div>
                <div className="bottom">
                  <a href="#">List visits</a>
                  <Icon type="right-circle-o" className="right-icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-fluid chart-main">
          <div className="span7">
            <div className="block">
              <div className="head">
                <div className="icon">
                  <Icon type="area-chart"/>
                </div>
                <h2>Visitor Statistics</h2>
              </div>
              <div id="container"></div>
              <div className="order-list">
                <div className="head orange">
                  <h2>Latest Orders</h2>
                </div>
                <Table {...this.state.tableForm} columns={columns} dataSource={data}/>
              </div>
            </div>
            <div className="block tip-message">
              <div className="head">
                <div className="icon">
                  <Icon type="tag"/>
                </div>
                <h2>Tickets</h2>
              </div>
              <div className="table-main">
                <table width="100%" className="table tickets">
                  <tbody>
                  <tr>
                    <td width="55" className="bl_blue"><span className="label label-info">new</span></td>
                    <td width="50">#AA-325 <span className="mark">23/02/2013</span></td>
                    <td><a href="#" className="cblue">Buy on themeforest this great template...</a> <span
                      className="mark">Added by Dmitry Ivaniuk</span></td>
                  </tr>
                  <tr>
                    <td className="bl_blue"><span className="label label-info">new</span></td>
                    <td>#AA-216 <span className="mark">22/02/2013</span></td>
                    <td><a href="#" className="cblue">Go to shop and buy beer!</a> <span className="mark">Added by Dmitry Ivaniuk</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="bl_green"><span className="label label-success">done</span></td>
                    <td>#AC-857 <span className="mark">21/02/2013</span></td>
                    <td><a href="#" className="cgreen">Buy on themeforest this great template...</a> <span
                      className="mark">Added by Dmitry Ivaniuk</span></td>
                  </tr>
                  <tr>
                    <td className="bl_red"><span className="label label-important">removed</span></td>
                    <td>#VB-57 <span className="mark">20/02/2013</span></td>
                    <td><a href="#" className="cred">Buy something for my dog...</a> <span className="mark">Added by Dmitry Ivaniuk</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="bl_red"><span className="label label-important">removed</span></td>
                    <td>#VB-57 <span className="mark">20/02/2013</span></td>
                    <td><a href="#" className="cred">Buy something for my dog...</a> <span className="mark">Added by Dmitry Ivaniuk</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="bl_green"><span className="label label-success">done</span></td>
                    <td>#AC-857 <span className="mark">21/02/2013</span></td>
                    <td><a href="#" className="cgreen">Buy on themeforest this great template...</a> <span
                      className="mark">Added by Dmitry Ivaniuk</span></td>
                  </tr>
                  <tr>
                    <td className="bl_red"><span className="label label-important">removed</span></td>
                    <td>#VB-57 <span className="mark">20/02/2013</span></td>
                    <td><a href="#" className="cred">Buy something for my dog...</a> <span className="mark">Added by Dmitry Ivaniuk</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="bl_green"><span className="label label-success">done</span></td>
                    <td>#AC-857 <span className="mark">21/02/2013</span></td>
                    <td><a href="#" className="cgreen">Buy on themeforest this great template...</a> <span
                      className="mark">Added by Dmitry Ivaniuk</span></td>
                  </tr>
                  <tr>
                    <td className="bl_red"><span className="label label-important">removed</span></td>
                    <td>#VB-57 <span className="mark">20/02/2013</span></td>
                    <td><a href="#" className="cred">Buy something for my dog...</a> <span className="mark">Added by Dmitry Ivaniuk</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="bl_green"><span className="label label-success">done</span></td>
                    <td>#AC-857 <span className="mark">21/02/2013</span></td>
                    <td><a href="#" className="cgreen">Buy on themeforest this great template...</a> <span
                      className="mark">Added by Dmitry Ivaniuk</span></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="message-main">
                <div className="head dblue">
                  <h2>Messages</h2>
                </div>
                <div id="mCSB_container mCS_no_scrollbar" className="message-repeat">
                  <div className="item blue">
                    <div className="arrow"></div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut diam
                      quis dolor mollis tristique. Suspendisse vestibulum convallis felis vitae facilisis. Praesent eu
                      nisi vestibulum erat.
                    </div>
                    <div className="date">09.02., 21:04</div>
                  </div>
                  <div className="item dblue out">
                    <div className="arrow"></div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut diam
                      quis dolor mollis tristique. Suspendisse vestibulum convallis felis vitae facilisis. Praesent eu
                      nisi vestibulum erat.
                    </div>
                    <div className="date">09.02., 21:02</div>
                  </div>
                  <div className="item blue">
                    <div className="arrow"></div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut diam
                      quis dolor mollis tristique. Suspendisse vestibulum convallis felis vitae facilisis. Praesent eu
                      nisi vestibulum erat.
                    </div>
                    <div className="date">09.02., 21:04</div>
                  </div>
                  {/*<div className="toolbar dark">
                    <div className="input-prepend input-append">
                      <span className="add-on dblue"><span className="icon-envelope icon-white"></span></span>
                      <input type="text" />
                        <button className="btn dblue" type="button">Send  <span className="icon-arrow-next icon-white"></span></button>
                    </div>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}