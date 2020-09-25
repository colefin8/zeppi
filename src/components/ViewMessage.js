import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {usePosition} from './Location';

function ViewMessage() {

    const history = useHistory()
    const {viewMessage} = useSelector((state) => state.msgReducer)
    const {latitude, longitude} = usePosition()
    const {message, lat, long, sender, receiver} = viewMessage
    const [match, setMatch] = useState(false)

    useEffect(() => {
        if(latitude && lat && longitude && long){
            if(latitude === lat && longitude === long){
                setMatch(true)
            }
        }  
    }, [lat, long, latitude, longitude])

    const close = () => {
        setMatch(false)
        history.push('/loot')
    }

    return (
        <div>
            {console.log(match, lat, latitude, long, longitude)}
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