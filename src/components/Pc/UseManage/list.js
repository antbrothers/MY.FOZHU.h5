import React, { Component} from 'react'
import style from './Scss/list.scss'

export default class List extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={style.list}>
        list
      </div>
    )
  }
}