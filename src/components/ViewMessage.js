import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {usePosition} from './Location';
import axios from 'axios';

function ViewMessage() {

    const history = useHistory()
    const {viewMessage} = useSelector((state) => state.msgReducer)
    const {latitude, longitude} = usePosition()
    const {message_id, lat, long} = viewMessage
    const [match, setMatch] = useState(false)
    const [result, setResult] = useState({})
    const {message, sender, receiver} = result

    useEffect(() => {
        const lootId = message_id
        if (message_id && latitude && longitude){
            axios.get(`/msg/match/${lootId}/${latitude}/${longitude}`).then(res => {
               if(res.data[0]){
                setResult(res.data[0])
                setMatch(true)
               }
            }).catch(err => console.log(err))
        }
        // if(latitude && lat && longitude && long){
        //     if(latitude === lat && longitude === long){
        //         setMatch(true)
        //     }
        // }  
    }, [lat, long, latitude, longitude])

    const close = () => {
        setMatch(false)
        history.push('/loot')
    }

    return (
        <div>
            {console.log(match, latitude, lat, longitude, long)}
            {console.log(result)}
        {match === true ? (
            <div>
            <h2>From: {sender}</h2>
            <h2>To: {receiver}</h2>
            <p>{message}</p>
            <button onClick={close}>CLOSE</button>
            </div>
        ) : null}
        </div>
        

    )
}

export default ViewMessage;