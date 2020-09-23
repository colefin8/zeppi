import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function NewMessage() {

    const history = useHistory()
    const {user} = useSelector((state) => state.authReducer)
    const [sender, setSender] = useState('')
    const [receiver, setReceiver] = useState('')
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [message, setMessage] = useState('')

    function success(pos) {
        var crd = pos.coords;
        setLat(crd.latitude)
        setLong(crd.longitude)
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    navigator.geolocation.getCurrentPosition(success);
    console.log('what is the location!!', success)

    const newMessage = () => {
        setSender(user.userId).then(() => {
            axios.post('/msg/newMsg', {message, sender, receiver, lat, long}).then(() => {
                history.push('/drops')
            })
        }).catch(err => console.log(err))
        
    }

    return (
        <div>
            <input 
                placeholder="Recipient"
                onChange={(e) => setReceiver(e.target.value)}></input>
            <input 
                type="text"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}></input>
            <button onClick={newMessage}>SEND</button>
        </div>
    )
}

export default NewMessage;