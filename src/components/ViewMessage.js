import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
// import axios from 'axios';

function ViewMessage() {

    const {viewMessage} = useSelector((state) => state.msgReducer)
    const {message, lat, long, sender, receiver} = viewMessage
    const [match, setMatch] = useState(false)
    const [crd, setCrd] = useState({})
    
    
    function success(pos) {
        setCrd(pos.coords)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    useEffect(() => {
        
            if(crd.latitude === lat && crd.longitude === long){
                console.log("3")
                setMatch(true)
            } else {
                alert('Go to loot location to view message!')
            }
    }, [])

    return (
        <div>
            {console.log(lat, long)}
        {(match === true) ? (
            <p>{message}</p>
        ) : null}
        </div>
        

    )
}

export default ViewMessage;