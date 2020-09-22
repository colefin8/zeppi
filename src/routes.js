import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login'
import MyDrops from './components/MyDrops'
import MyFriends from './components/MyFriends'
import MyLoot from './components/MyLoot'
import MapView from './components/Map'
import Account from './components/Account'
import Signup from './components/Signup'
import Welcome from './components/Welcome'

export default (
    <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/login" component={Login}/>
        <Route path="/account" component={Account}/>
        <Route path="/drops" component={MyDrops}/>
        <Route path="/loot" component={MyLoot}/>
        <Route path="/friends" component={MyFriends}/>
        <Route path="/map" component={MapView}/>
        <Route path="/signup" component={Signup}/>
    </Switch>
)