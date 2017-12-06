import React, { Component} from 'react'
import Style from './Scss/index.scss'
import Banner from './banner'
import {Icon } from 'antd'
export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={Style.pruductmanage}>
        <div className="page-header">
          <div className="icon">
            <Icon type="arrow-right" />
          </div>
          <h1>Dashboard <small>METRO STYLE ADMIN PANEL</small></h1>
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
                  <Icon type="right-circle-o" className="right-icon" />
                </div>
              </div>
              <div className="widget green icon">
                <div className="left">
                  <div className="icon">
                    <Icon type="cloud-download-o" className="download-icon" />
                  </div>
                </div>
                <div className="right">
                  <table cellpadding="0" cellspacing="0" width="100%">
                    <tbody><tr>
                      <td>HDD</td><td>4.5 / 250 GB</td>
                    </tr>
                    <tr>
                      <td>MySQL</td><td>1.8 / 10 GB</td>
                    </tr>
                    <tr>
                      <td>Databases</td><td>1 / 5</td>
                    </tr>
                    <tr>
                      <td>E-mails</td><td>5 / 15</td>
                    </tr>
                    <tr>
                      <td>Tickets</td><td>2</td>
                    </tr>
                    </tbody></table>
                </div>
                <div className="bottom">
                  <a href="#">Server information</a>
                  <Icon type="right-circle-o" className="right-icon" />
                </div>
              </div>
              <div className="widget orange chart nmr">
                <div className="left">
                  <div className="icon">
                    <Icon type="bar-chart" className="chart-view" />
                  </div>
                </div>
                <div className="right">
                  65% New <br/>
                  35% Returning <br/>
                  00:05:12 Average time on site
                </div>
                <div className="bottom">
                  <a href="#">List visits</a>
                  <Icon type="right-circle-o" className="right-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Banner></Banner>
      </div>
    )
  }
}