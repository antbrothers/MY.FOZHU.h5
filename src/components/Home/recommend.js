import React, {Component} from 'react'
import style from './recommend.scss'

export default class Recommend extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="recoment" className="main">
        <div className="header">
          <div className="title">
            <div className="titlecomm">
              <div>精品推荐专区</div>
            </div>
            <div className="titlecomm more">
              <div>更多</div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="produce">
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd1.jpg' className="produceimg"/>
          </div>
          <div className="produce">
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd2.jpg' className="produceimg"/>
          </div>
          <div className="produce">
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd3.jpg' className="produceimg"/>
          </div>
          <div className="produce">
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd4.jpg' className="produceimg"/>
          </div>
          <div className="produce">
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd5.jpg' className="produceimg"/>
          </div>
          <div className="produce">
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd6.jpg' className="produceimg"/>
          </div>
        </div>
        <div className="line"></div>
        <div className="banner">
          <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/ba1.jpg" className="bannerimg" />
        </div>
      </div>
    )
  }
}