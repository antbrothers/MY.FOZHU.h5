import React from 'react'
import {connect} from 'react-redux'
import './banner.scss'
import {Carousel, WhiteSpace, WingBlank} from 'antd-mobile'
import * as bannerAction from 'actions/Banner'


class Banner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
      ]
    }
  }
  componentWillMount () {
    var _this = this
    new Promise(function (resolve, reject) {
      var res = _this.props.getAdvertPicList("1")
      resolve(res)
    }).then(function (res) {
      _this.setState({items: _this.props.dataGrid.getRes})
    })
  }
  render() {
    return (
      <div>
        <WingBlank className="banner-wrapper">
          <Carousel
            autoplay={true}
            infinite
            selectedIndex={1}
          >
            {
              this.state.items.map(function (item) {
                return <a key={item.id}
                          style={{ display: 'inline-block', width: '100%', height: '300px'}}
                          href=""
                >
                  <img src={"http://localhost:8081/" + item.advertPaths}
                         alt=""
                         style={{ width: '100%', verticalAlign: 'top' }}
                         onLoad={() => {
                           window.dispatchEvent(new Event('resize'));
                         }}>
                  </img>
                </a>
              })
            }
          </Carousel>
        </WingBlank>
        <div className="bannerNav">
          <div className="navComm">
            <div className="navTitle">有报专区</div>
            <div className="navDesc">24小时自助兑换</div>
          </div>
          <div className="navComm">
            <div className="navTitle">看购电影票</div>
            <div className="navDesc">各种优惠等你来</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => ({dataGrid: state.banner}), bannerAction)(Banner)