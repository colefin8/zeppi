import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import {usePosition} from './Location';

function ViewMessage() {

    const {viewMessage} = useSelector((state) => state.msgReducer)
    const {latitude, longitude, error} = usePosition()
    const {message, lat, long, sender, receiver} = viewMessage
    const [match, setMatch] = useState(false)

    useEffect(() => {
        
            if(latitude === lat && longitude === long){
                setMatch(true)
            }
    }, [])

    return (
        <div>
        {(match === true) ? (
            <div>
            <h2>From: {sender}</h2>
            <h2>To: {receiver}</h2>
            <p>{message}</p>
            </div>
        ) : null}
        </div>
        

    )
}

export default ViewMessage;