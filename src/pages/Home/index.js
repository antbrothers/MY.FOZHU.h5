import React, {Component} from 'react'
 import Banner from '../../components/Home/banner'
import GoldSeed from '../../components/Home/goldSeed'
import './Scss/index.scss'

class HomeIndex extends Component {
  render() {
    return (
      <div className="containner">
        <Banner/>
        <GoldSeed/>
      </div>
    )
  }
}
export default HomeIndex