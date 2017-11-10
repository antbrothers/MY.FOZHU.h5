import React, {Component} from 'react'
 import Banner from '../../components/Home/banner'
import GoldSeed from '../../components/Home/goldSeed'
import Recomment from '../../components/Home/recommend'
import './Scss/index.scss'

class HomeIndex extends Component {
  render() {
    return (
      <div className="containner">
        <Banner/>
        <GoldSeed/>
        <Recomment/>
      </div>
    )
  }
}
export default HomeIndex