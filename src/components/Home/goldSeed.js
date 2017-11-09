import React, {Component} from 'react'

import style from './goldSeed.less'

export default class GoldSeed extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className={style.goldSeed}>
        <div className={style.line}></div>
        <div className={style.title}>
          <div className={style.titlecomm}>
            <div>金种子专区</div>
          </div>
          <div className={`${style.titlecomm} ${style.more}`}>
            <div>更多</div>
          </div>
        </div>
        <div className={style.shop}>
          <div className={style.rshop}>
            <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/banner1.jpg" className={style.imgcomm}/>
          </div>
          <div className={style.lshop}>
            <div className={style.lshoptop}>
              <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/banner2.jpg" className={style.imgcomm}/>
            </div>
            <div className={style.lshoptop}>
              <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/banner3.jpg" className={style.imgcomm}/>
            </div>
          </div>
        </div>
        <div className={style.bottomshop}>
          <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/banner4.jpg" className={style.imgcomm}/>
        </div>
      </div>
    )
  }
}