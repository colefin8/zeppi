import React, {useState} from 'react';
import '../styling/components/Welcome.scss';
import {Link} from 'react-router-dom'
import CloudSpan from '../assets/Clouds/CloudSpan/CloudSpan';
import PaperPlanes from '../assets/Planes/PaperPlanes/PaperPlanes';
import Zeppi from '../assets/ZeppiLogo/Zeppi/Zeppi';
import CaretDownIcon from '../assets/icons/systemIcons/CaretDownIcon';
import CaretUpIcon from '../assets/icons/systemIcons/CaretUpIcon';

function Welcome() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Welcome">
            <div className="cloud-container">
                <div className="nav-bar">
                    <Zeppi className="zeppi-text"/>
                    <div className={`header-buttons ${!isOpen ? 'hidden-md-down' : ''}`}>
                        <div className="container__row justify-end">
                            <Link to="/login" className="login-button">LOGIN</Link>
                            <Link to="/signup" className="signup-button">SIGNUP</Link>
                        </div>
                    </div>
                </div>
                <div className="welcome-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CaretDownIcon className="welcome-toggle-icon"/> : <CaretUpIcon className="welcome-toggle-icon"/>}
                </div>
            </div>
            <div className="preview-container">
                <div className="container__row TopPageDiv">
                
                </div>
                <div className="container__row size-h-3">
                    <PaperPlanes className="paper-planes"/>
                </div>
                <CloudSpan className="CloudSpan"/>
                <div className="RightBelowCloud p-v-2">
                    <div className="container__row justify-center"><h1 className="headline">Features</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;