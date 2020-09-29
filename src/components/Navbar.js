import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../redux/authReducer';
import {useHistory} from 'react-router-dom';

import axios from 'axios';

import ZeppiWithPlane from '../assets/ZeppiLogo/ZeppiWithPlane/ZeppiWithPlane';
import CaretRightIcon from '../assets/icons/systemIcons/CaretRightIcon';
import CaretLeftIcon from '../assets/icons/systemIcons/CaretLeftIcon';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()
    const dispatch = useDispatch()
    const handleLogout = () => {
        axios.post('/auth/logout').then(() => {
            dispatch(logoutUser())
            history.push('/')
        })
    }

    return (
        <div className="Navbar">
            <div className={`${isOpen ? 'NavbarContainer expand-container' : 'collapse-container'}`}>
                <div className="flex-column justify-between size-h-full">
                <div className="nav-list-container">
                    <div className="container__row">
                        <ZeppiWithPlane className={`zeppiNavLogo ${!isOpen ? "hidden" : ""}`}/>
                    </div>
                        <Link to="/loot" className={`nav-link-container link p-l-1 ${!isOpen ? "hidden" : ""}`} onClick={e => setIsOpen(!isOpen)}>MY LOOT</Link>
                        <Link to="/drops" className={`nav-link-container link p-l-1 ${!isOpen ? "hidden" : ""}`} onClick={e => setIsOpen(!isOpen)}>MY DROPS</Link>
                        <Link to="/map" className={`nav-link-container link p-l-1 ${!isOpen ? "hidden" : ""}`} onClick={e => setIsOpen(!isOpen)}>MAP</Link>
                        <Link to="/friends" className={`nav-link-container link p-l-1 ${!isOpen ? "hidden" : ""}`} onClick={e => setIsOpen(!isOpen)}>MY FRIENDS</Link>
                        <Link to="/account" className={`nav-link-container link p-l-1 ${!isOpen ? "hidden" : ""}`} onClick={e => setIsOpen(!isOpen)}>ACCOUNT</Link>
                    </div>   
                    <div className="container__row">
                        <button className={`nav-link-container link p-l-1 ${!isOpen ? "hidden" : ""}`} onClick={handleLogout}>LOG OUT</button>
                    </div>   
                </div>
            </div>
            <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CaretRightIcon className="nav-toggle-icon"/> : <CaretLeftIcon className="nav-toggle-icon"/>}
            </div>
        </div>
    )
}

export default Navbar;