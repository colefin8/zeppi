import React, {useEffect} from 'react';
import Friend from './Friend';
import {useDispatch, useSelector} from 'react-redux';
import {getFriends} from '../redux/friendReducer';
import axios from 'axios';


function MyFriends() {

    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.authReducer)
    const {friends} = useSelector((state) => state.friendReducer)
    const {userId, username} = user

    useEffect(() => {
        axios.get(`/friendList/all/${userId}`).then(res => {
            dispatch(getFriends(res.data))
        }).catch(err => console.log(err))
    }, [dispatch, userId])

    const friendList = friends.filter(name => name !== username)
    .map(friend => <Friend key={friend.friend_id} friend={friend}/>)

    return (
        <div>
            <h1>Welcome to "My Friends"!</h1>
            {friendList}
        </div>
    )
}

export default MyFriends;