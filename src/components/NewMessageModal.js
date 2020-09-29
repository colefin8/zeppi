import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {usePosition} from './Location';
import axios from 'axios';
import CloseIcon from '../assets/icons/systemIcons/CloseIcon';
const NewMessageModal = (props) => {

    const history = useHistory()
    const {user} = useSelector((state) => state.authReducer)
    const {latitude, longitude} = usePosition();
    const [receiver, setReceiver] = useState(0)
    const [message, setMessage] = useState('')

    const newMessage =  () => {
       
    
    }

    return (
        <div className="NewMessageModal modal-overlay">
            {console.log(user)}
            <div className="modal-container">
                <div className="flex justify-end">
                    <CloseIcon className='color-red m-t-1 m-r-1' onClick={e => props.handleClose(e)}/>
                </div>
                <div className="page-title">
                    <h1 className="title-blue m-t-3">New Drop</h1>
                </div>
                <div className="page-content">
                    <div className="page-header">
                        <div className="container__row justify-between">
                            <div className="full-box">
                                <div className="container__row justify-between">
                                        <input 
                                        placeholder="Recipient"
                                        type="number"
                                        className="input container__col-22 container__col-offset-1"
                                        onChange={(e) => setReceiver(e.target.value)}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-header">
                        <div className="container__row justify-between">
                            <div className="full-box">
                                <div className="container__row justify-between">
                                    <textarea
                                    type="text"
                                    placeholder="Type your message here..."
                                    className="input container__col-22 container__col-offset-1"
                                    onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-action"> 
                        <button className="btn-lg-red page-btn m-b-3" onClick={newMessage}>ADD DROP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMessageModal;