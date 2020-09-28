import React, {useEffect} from 'react';
import DropSnapshot from './DropSnapshot';
import {useDispatch, useSelector} from 'react-redux';
import {getDrops} from '../redux/messageReducer';
import axios from 'axios';

function MyDrops() {

    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.authReducer)
    const {drops} = useSelector((state) => state.msgReducer)
    const {userId} = user

    useEffect(() => {
        axios.get(`/msg/drops/${userId}`).then(res => {
            console.log(res.data)
            dispatch(getDrops(res.data))
        }).catch(err => console.log(err))
    }, [dispatch])
    
    return (
        <div className="MyDrops dashboard-page">
            <div className="page-container">
                <div className="page-title">
                    <h1 className="title-white">My Drops</h1>
                </div>
                <div className="page-content">
                    <div className="page-header">
                        <div className="container__row justify-between">
                        <div className="half-box">
                            <div className="highlight-container">
                                <div className="highlight-type">Active</div>
                                <div className="highlight-count highlight-red">23</div>
                                <div className="highlight-focus">Drops</div>
                            </div>
                        </div>
                        <div className="half-box">
                            <div className="highlight-container">
                                <div className="highlight-type">Total</div>
                                <div className="highlight-count highlight">142</div>
                                <div className="highlight-focus">Drops</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="table-container">  
                        <div className="table-header">
                            <p className=" table-title phrase-blue">Active Drops</p>
                        </div>
                        <div className="table-content">
                            {drops.map(item => <div className="table-row"><DropSnapshot key={item.message_id} drop={item}/></div>)}
                        </div>
                        <div className="table-footer">
                            <p className="caption-red">SHOW MORE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyDrops;