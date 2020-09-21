import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login'
import Dash from './components/Dash'
import MapView from './components/Map'
import Account from './components/Account'
import Signup from './components/Signup'
import Welcome from './components/Welcome'

export default (
    <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/login" component={Login}/>
        <Route path="/account" component={Account}/>
        <Route path="/dash" component={Dash}/>
        <Route path="/map" component={MapView}/>
        <Route path="/signup" component={Signup}/>
    </Switch>
)