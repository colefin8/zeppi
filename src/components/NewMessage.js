import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {usePosition} from './Location';
import axios from 'axios';

function NewMessage() {

    const history = useHistory()
    const {user} = useSelector((state) => state.authReducer)
    const {latitude, longitude} = usePosition();
    const [receiver, setReceiver] = useState(0)
    const [message, setMessage] = useState('')

    const newMessage =  () => {
        const sender = user.userId

        console.log(latitude, longitude)
        axios.post('/msg/newMsg', {message, sender, receiver, latitude, longitude}).then(() => {
                history.push('/drops')
        }).catch(err => console.log(err))
        
    }

    return (
        <div className="NewMessage dashboard-page">
            {console.log(user)}
            <div className="page-container">
                <div className="page-title">
                    <h1 className="title-white">New Drop</h1>
                </div>
                <div className="page-content">
                    <div className="page-header">
                        <div className="container__row justify-between">
                            <div className="full-box">
                                <div className="container__row justify-between">
                                    <div className="container__col-22 container__col-offset-1">
                                        <input 
                                        placeholder="Recipient"
                                        type="number"
                                        className="page-input"
                                        onChange={(e) => setReceiver(e.target.value)}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-header">
                        <div className="container__row justify-between">
                            <div className="full-box">
                                <div className="container__row justify-between">
                                    <div className="container__col-22 container__col-offset-1">
                                        <textarea
                                        type="text"
                                        placeholder="Type your message here..."
                                        className="page-input"
                                        onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-action"> 
                        <button className="btn-lg-red page-btn" onClick={newMessage}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMessage;