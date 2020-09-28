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
    .map((friend, index) => <div className="table-row"><Friend key={index} friend={friend}/></div>)

    const requestList = requests.map(request => <div className="table-row"><Request key={request.id} request={request}/></div>)

    return (
        <div className="MyFriends dashboard-page">
            <div className="page-container">
                <div className="page-title">
                    <h1 className="title-white">My Friends</h1>
                </div>
                <div className="page-content">
                    <div className="table-container">  
                        <div className="table-header">
                            <p className=" table-title phrase-blue">Friends</p>
                        </div>
                        <div className="table-content">
                            {friendList}
                        </div>
                        <div className="table-footer">
                            <p className="caption-red">SHOW MORE</p>
                        </div>
                    </div>
                    <div className="table-container">  
                        <div className="table-header">
                            <p className=" table-title phrase-blue">Requests</p>
                        </div>
                        <div className="table-content m-t-1">
                            {requestList}
                        </div>
                        <div className="table-footer">
                            <p className="caption-red">SHOW MORE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyFriends;