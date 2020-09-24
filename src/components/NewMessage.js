import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {usePosition} from './Location';
import axios from 'axios';

function NewMessage() {

    const history = useHistory()
    const {user} = useSelector((state) => state.authReducer)
    const {latitude, longitude, error} = usePosition();
    const [receiver, setReceiver] = useState(0)
    const [message, setMessage] = useState('')

    const newMessage =  () => {
        const sender = user.userId
        console.log(sender)
        axios.post('/msg/newMsg', {message, sender, receiver, latitude, longitude}).then(() => {
                history.push('/drops')
        }).catch(err => console.log(err))
        
    }

    return (
        <div>
            {console.log(user)}
            <input 
                placeholder="Recipient"
                type="number"
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