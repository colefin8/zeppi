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
import AuthRoute from './AuthRoute';

export default (
    <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/login" component={Login}/>
        <AuthRoute path="/account" component={Account}/>
        <AuthRoute path="/drops" component={MyDrops}/>
        <AuthRoute path="/loot" component={MyLoot}/>
        <AuthRoute path="/friends" component={MyFriends}/>
        <AuthRoute path="/addFriends" component={AddFriend}/>
        <AuthRoute path="/map" component={MapView}/>
        <Route path="/signup" component={Signup}/>
        <AuthRoute path="/viewMessage/:lootId" component={ViewMessage}/>
        <AuthRoute path="/newMessage" component={NewMessage}/>
    </Switch>
)