import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Snapshot from './Snapshot';
import {getLoot, getMessage} from '../redux/messageReducer';
import axios from 'axios';

function MyLoot() {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.authReducer)
    const {loot} = useSelector((state) => state.msgReducer)
    const {userId} = user

    useEffect(() => {
        axios.get(`/msg/userMsg/${userId}`).then(res => {
            console.log(res.data)
            dispatch(getLoot(res.data))
        }).catch(err => console.log(err))
    }, [dispatch, userId])

    const view = (lootId) => {
        axios.get(`/msg/viewMsg/${lootId}`).then(res => {
            dispatch(getMessage(res.data))
        }).catch(err => console.log(err))

        history.push(`/viewMessage/${lootId}`)
    }

    return (
        <div>
        <div>This is where the user's received messages (loot) will be.</div>
        {loot.map(item => <Snapshot key={item.message_id} loot={item} view={view}/>)}
        </div>
    )
}

export default MyLoot;