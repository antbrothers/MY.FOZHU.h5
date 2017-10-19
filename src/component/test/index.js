/**
 * Created by Administrator on 2017/10/17.
 */
import React, { Component } from 'react'
import './index.scss'
import ReactSwipe from 'react-swipe'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datalist: [],
            playinglist: []
        }
    }

    componentWillMount() {
        console.log(this.state.datalist.length)
        this._isMounted = true
        axios.get("/v4/api/billboard/home").then(res => {
            this.handlehomeResponse(res)
        })
        axios.get("/v4/api/film/now-playing").then(res=>{
             this.handleplayingResponse(res)
        })
    }
    handlehomeResponse(response) {
    if (!this._isMounted) return;
        this.setState({
            datalist: response.data.data.billboards
        })
    }
    handleplayingResponse(response) {
        if (!this._isMounted) return;
        this.setState({
            playinglist: response.data.data.films
        })
    }

    componentWillUnmount() {
        this._isMounted = false
    }
    render() {
        var Banner =require('../../img/banner6.jpg')
        return (
            <div className="home">
                <ReactSwipe className="carousel" swipeOptions={{continuous: true, auto: 3000}} key={this.state.datalist.length}>
                    {
                        this.state.datalist.map((item) =>
                            <div key={item.id}>
                                <img src={item.imageUrl} style={{width: "100%"}}/>
                            </div>
                        )
                    }
                </ReactSwipe>
                <div>
                  <img src={Banner} />
                </div>
                <ul className="homeplayinglist">
                    {
                        this.state.playinglist.map((item, index) =>
                            <li key={item.id} onClick={() => {
                                this.props.history.push(`/detail/${item.id}`)
                            }}>
                                <img src={item.cover.origin}/>
                                <h3>{item.name}</h3>
                                <p>{item.cinemaCount + "家影院上映" + item.watchCount+ "人购票"}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default App