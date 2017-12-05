import React from 'react'
import style from './banner.scss'
import {Carousel, WhiteSpace, WingBlank} from 'antd-mobile'

export default class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
          id: 11351
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
          id: 11372
        },
        {
          linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
          id: 11378
        },
        {
          linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
          id: 11375
        },
        {
          linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
          id: 11287
        }
      ]
    }
  }
  render() {
    return (
      <div>
        {/*<div className={style.wrapper}>
          <div>
            {
              this.state.items.map(function (item) {
                return <div key={item.id}>
                  <image src={item.picUrl}></image>
                </div>
              })
            }
            <div>
              <image></image>
            </div>
          </div>
        </div>*/}
        <WingBlank className={style.wrapper}>
          <Carousel
            autoplay={true}
            infinite
            selectedIndex={1}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {
              this.state.items.map(function (item) {
                return <a key={item.id}
                          style={{ display: 'inline-block', width: '100%', height: '300px'}}
                          href="http://aplipay.com"
                >
                  <img src={item.picUrl}
                         alt=""
                         style={{ width: '100%', verticalAlign: 'top' }}
                         onLoad={() => {
                           // fire window resize event to change height
                           window.dispatchEvent(new Event('resize'));
                           // this.setState({ imgHeight: 'auto' });
                         }}>
                  </img>
                </a>
              })
            }
          </Carousel>
        </WingBlank>
        <div className={style.bannerNav}>
          <div className={style.navComm}>
            <div className={style.navTitle}>有报专区</div>
            <div className={style.navDesc}>24小时自助兑换</div>
          </div>
          <div className={style.navComm}>
            <div className={style.navTitle}>看购电影票</div>
            <div className={style.navDesc}>各种优惠等你来</div>
          </div>
        </div>
      </div>
    )
  }
}