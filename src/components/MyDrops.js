import React, {useEffect} from 'react';
import DropSnapshot from './DropSnapshot';
import {useDispatch, useSelector} from 'react-redux';
import {getDrops} from '../redux/messageReducer';
import axios from 'axios';

function MyDrops() {

    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.authReducer)
    const {drops} = useSelector((state) => state.msgReducer)
    const {userId} = user

    useEffect(() => {
        axios.get(`/msg/drops/${userId}`).then(res => {
            console.log(res.data)
            dispatch(getDrops(res.data))
        }).catch(err => console.log(err))
    }, [dispatch, userId])
    
    return (
        <div>
        <div>This is where the user's sent messages (drops) will be.</div>
        {drops.map(item => <DropSnapshot key={item.message_id} drop={item}/>)}
        </div>
    )
}

export default MyDrops;