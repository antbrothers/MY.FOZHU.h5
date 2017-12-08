import React, { Component } from 'react'

import Banner from './Home/banner'

export default class ManageHome extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Banner></Banner>
      </div>
    )
  }
}