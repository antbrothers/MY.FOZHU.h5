import React, {Component} from 'react'
import BScroll from 'better-scroll'
 import Banner from '../../components/Home/banner'
import GoldSeed from '../../components/Home/goldSeed'
import Recomment from '../../components/Home/recommend'
import './Scss/index.scss'

class HomeIndex extends Component {
  componentDidMount (){
    let container = document.querySelector('.wrapper')
    let scroll = new BScroll(container, {
      startX: 0,
      startY: 0
    })
  }
  render() {
    return (
      <div className="wrapper">
        <Banner/>
        <GoldSeed/>
        <Recomment/>
      </div>
    )
  }
}
export default HomeIndex