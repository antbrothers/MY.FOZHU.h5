import React, {Component} from 'react'

import style from './goldSeed.less'

export default class GoldSeed extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="goldSeed">
        <div className="line"></div>
        <div className="title">
          <div className="titlecomm">
            <div>金种子专区</div>
          </div>
          <div className="titlecomm more">
            <div>更多</div>
          </div>
        </div>
        <div className="shop">
          <div className="rshop">
            <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/banner1.jpg" className="imgcomm"/>
          </div>
          <div className="lshop">
            <div className="lshoptop">
              <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/banner2.jpg" className="imgcomm"/>
            </div>
            <div className="lshoptop">
              <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/banner3.jpg" className="imgcomm"/>
            </div>
          </div>
        </div>
        <div className="bottomshop">
          <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/banner4.jpg" className="imgcomm"/>
        </div>
        <div className="line"></div>
        <div className="banner">
          <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/ba2.jpg" className="bannerimg" />
        </div>
      </div>
    )
  }
}