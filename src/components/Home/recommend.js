import React, {Component} from 'react'
import style from './recommend.scss'

export default class Recommend extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style.main}>
        <div className={`header`}>
          <div className={style.title}>
            <div className={style.titlecomm}>
              <div>精品推荐专区</div>
            </div>
            <div className={`${style.titlecomm} ${style.more}`}>
              <div>更多</div>
            </div>
          </div>
        </div>
        <div className={style.list}>
          <div className={style.produce}>
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd1.jpg' className={style.produceimg}/>
          </div>
          <div className={style.produce}>
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd2.jpg' className={style.produceimg}/>
          </div>
          <div className={style.produce}>
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd3.jpg' className={style.produceimg}/>
          </div>
          <div className={style.produce}>
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd4.jpg' className={style.produceimg}/>
          </div>
          <div className={style.produce}>
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd5.jpg' className={style.produceimg}/>
          </div>
          <div className={style.produce}>
            <img src='http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/pd6.jpg' className={style.produceimg}/>
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.banner}>
          <img src="http://www.17sucai.com/preview/10221/2017-01-22/azenui/images/img/ba1.jpg" className={style.bannerimg} />
        </div>
      </div>
    )
  }
}