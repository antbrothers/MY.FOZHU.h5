import React, { Component } from 'react'
import '../../../static/js/swiper.min.js'
import './Scss/index.scss'
import '../../../static/js/swiper.min.css'
class CompanyInfo extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  render() {
    return (
      <div className="company-info-main">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">Slide 1</div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
            <div className="swiper-slide">Slide 4</div>
            <div className="swiper-slide">Slide 5</div>
            <div className="swiper-slide">Slide 6</div>
            <div className="swiper-slide">Slide 7</div>
            <div className="swiper-slide">Slide 8</div>
            <div className="swiper-slide">Slide 9</div>
            <div className="swiper-slide">Slide 10</div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    )
  }
}

export default CompanyInfo