import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import index from '../../pages/Pc/Index'
export default class Menu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Link to='/pc/index'>
          Menu
        </Link>
        <Route path="/pc/index" component={index}/>
      </div>
    )
  }
}