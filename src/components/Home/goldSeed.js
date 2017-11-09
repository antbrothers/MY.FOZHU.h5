import React, {Component} from 'react'

import style from './goldSeed.less'

export default class GoldSeed extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className={style.goldSeed}>
        <div className={style.title}>
          <div className='title-comm'>
            <div>金种子专区</div>
          </div>
          <div className='title-comm'>
            <div>更多</div>
          </div>
        </div>
      </div>
    )
  }
}