import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../redux/authReducer';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function Navbar() {

    const history = useHistory()
    const dispatch = useDispatch()
    const handleLogout = () => {
        axios.post('/auth/logout').then(() => {
            dispatch(logoutUser())
            history.push('/')
        })
    }

    return (
        <div>
            <div></div>
            <div className="nav">
                <h2><Link to="/loot" className="link">MY LOOT</Link></h2>
                <h2><Link to="/drops" className="link">MY DROPS</Link></h2>
                <h2><Link to="/map" className="link">MAP</Link></h2>
                <h2><Link to="/friends" className="link">MY FRIENDS</Link></h2>
                <h2><Link to="/account" className="link">ACCOUNT</Link></h2>
                <button onClick={handleLogout}>LOG OUT</button>
            </div>
        </div>
    )
}

export default Navbar;