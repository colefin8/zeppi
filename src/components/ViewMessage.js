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
        <div className="ViewMessage dashboard-page">
            {console.log(match, latitude, lat, longitude, long)}
            {console.log(result)}
        {match === true ? (
            <div className="page-container">
                <div className="page-title">
                    <h1 className="title-white">View Message</h1>
                </div>
                <div className="page-content">
                    <div className="page-header">
                        <div className="container__row justify-between">
                            <div className="full-box">
                                <div className="container__row justify-between">
                                    <div className="container__col-22 container__col-offset-1">
                                        <input 
                                        value={`From: ${sender}`}
                                        type="number"
                                        className="page-input"
                                        ></input>
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
                                        <input 
                                        value={`To: ${receiver}`}
                                        type="number"
                                        className="page-input"
                                        ></input>
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
                                        value={message}
                                        className="page-input"
                                        onChange={(e) => {}}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-action"> 
                        <button onClick={close}>CLOSE</button>
                    </div>

                </div>
            </div>
        ) : null}
        </div>
        

    )
}

export default ViewMessage;