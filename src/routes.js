import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login'
import MyDrops from './components/MyDrops'
import MyFriends from './components/MyFriends'
import MyLoot from './components/MyLoot'
import MapView from './components/MainMap'
import Account from './components/Account'
import Signup from './components/Signup'
import Welcome from './components/Welcome'
import ViewMessage from './components/ViewMessage'
import NewMessage from './components/NewMessage'
import AddFriend from './components/AddFriend'

export default (
    <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/login" component={Login}/>
        <Route path="/account" component={Account}/>
        <Route path="/drops" component={MyDrops}/>
        <Route path="/loot" component={MyLoot}/>
        <Route path="/friends" component={MyFriends}/>
        <Route path="/addFriends" component={AddFriend}/>
        <Route path="/map" component={MapView}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/viewMessage/:lootId" component={ViewMessage}/>
        <Route path="/newMessage" component={NewMessage}/>
    </Switch>
)