import React, {useEffect} from 'react';
import Friend from './Friend';
import Request from './Request';
import {useDispatch, useSelector} from 'react-redux';
import {getFriends, getRequests} from '../redux/friendReducer';
import axios from 'axios';


function MyFriends() {

    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.authReducer)
    const {friends, requests} = useSelector((state) => state.friendReducer)
    const {userId, username} = user

    useEffect(() => {
        axios.get(`/friends/all/${userId}`).then(res => {
            dispatch(getFriends(res.data))
        }).catch(err => console.log(err))
        axios.get(`/friends/request/${userId}`).then(res => {
            dispatch(getRequests(res.data))
        }).catch(err => console.log(err))
    }, [dispatch, userId])

    const friendList = friends.filter(name => name !== username)
    .map((friend, index) => <Friend key={index} friend={friend}/>)

    const requestList = requests.map(request => <Request key={request.id} request={request}/>)

    return (
        <div>
            <h1>My Friends</h1>
            {friendList}
            <h1>Friend Requests</h1>
            {requestList}
        </div>
    )
}

export default MyFriends;