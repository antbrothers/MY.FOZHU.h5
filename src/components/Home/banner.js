import React from 'react'
import BScroll from 'better-scroll'
import style from './banner.scss'
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
  componentDidMount (){
    let wrapper = document.querySelector('.' + style.wrapper)
    let scroll = new BScroll(wrapper, {
      startX: 0,
      startY: 0
    })
  }
  render() {
    return (
      <div>
        <div className={style.wrapper}>
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
        </div>
        <div className={style.bannerNav}>
          <div className={style.navComm}>
            <div className={style.navTitle}>有报专区</div>
            <div className={style.navTitle}>24小时自助兑换</div>
          </div>
          <div className={style.navComm}>
            <div className={style.navTitle}>看购电影票</div>
            <div className={style.navTitle}>各种优惠等你来</div>
          </div>
        </div>
      </div>

    )
  }
}