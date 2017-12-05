import React, { Component} from 'react'
import Style from './Scss/index.scss'
import Banner from './banner'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={Style.pruductmanage}>
        <Banner></Banner>
      </div>
    )
  }
}