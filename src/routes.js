import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Auth from './Components/Auth/Auth'

export default(
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/auth' component={Auth}/>
    </Switch>
)