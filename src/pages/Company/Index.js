import React, { Component } from 'react'
import Swiper from '../../../static/js/swiper.min.js'
import * as swiperAnimate from '../../../static/js/swiper.animate1.0.2.min.js'
import './Scss/index.scss'
import '../../../static/js/swiper.min.css'
import '../../../static/js/animate.css'
class CompanyInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: {
        ufo: require('../../../static/image/page1_3.jpg'),
        page0: require('../../../static/image/page1_0.png'),
        page1: require('../../../static/image/page1_1.png'),
        page2: require('../../../static/image/page1_2.png')
      }
    }
  }

  componentDidMount () {
    var mySwiper = new Swiper ('.swiper-container', {
      on:{
        init: function(){
          swiperAnimate.swiperAnimateCache(this); //隐藏动画元素
          swiperAnimate.swiperAnimate(this);      // 初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
          swiperAnimate.swiperAnimate(this);    //每个slide切换结束时也运行当前slide动画
        }
      },
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

  }
  render() {
    return (
      <div className="company-info-main">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide first">
              <div className="first-title-main">
                <div className="title0">
                  专业团队 · 至新思想
                </div>
                <div className="title1">我们是来自全国各地的信息安全爱好者<br/>遥遥领先，独占鳌头</div>
                <div>
                  <div className="imgGroug">
                    <img src={this.state.images.page2} className="group-img-comm group-img-three"/>
                    <img src={this.state.images.page0} className="group-img-comm group-img-one"/>
                    <img src={this.state.images.page1} className="group-img-comm group-img-two"/>
                  </div>
                  <img src={this.state.images.ufo} className="ufo-bg"/>
                </div>
              </div>

              {/*<p className="ani bounceInLeft animated" data-swiper-animate-effect="bounceInLeft" data-swiper-animate-duration="0.5s" data-swiper-animate-delay="0.3s">内容</p>*/}
            </div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
            <div className="swiper-slide">Slide 5</div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    )
  }
}

export default CompanyInfo