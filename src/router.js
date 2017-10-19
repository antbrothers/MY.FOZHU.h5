/**
 * Created by Administrator on 2017/10/18.
 */
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

import test from './component/test/index'
import Home from './component/home/index'

const router = (
    <Router>
        <Switch>
            <Route path="/test" component={test}/>
            <Route path="/home" component={Home}/>
            <Redirect from="/" to="/test"/> {/*重定向*/}
        </Switch>
    </Router>
)
export default router;