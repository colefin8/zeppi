import React from 'react';
import '../styling/components/Welcome.scss';
import {Link} from 'react-router-dom'
import CloudSpan from '../assets/Clouds/CloudSpan/CloudSpan';
import PaperPlanes from '../assets/Planes/PaperPlanes/PaperPlanes';
import Zeppi from '../assets/ZeppiLogo/Zeppi/Zeppi';

function Welcome() {
    return (
        <div>
            <div className="cloud-container">
                <div className="nav-bar">
                    <Zeppi className="zeppi-text"/>
                    <div className="header-buttons">
                        <div className="container__row">
                        <div className="login-button">
                            <Link to="/login" className="link"><p>LOGIN</p></Link>
                        </div>
                        <div className="signup-button">
                        <Link to="/signup" className="link"><p>SIGNUP</p></Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preview-container">
                <div className="container__row">
                    <PaperPlanes className="paper-planes"/>
                </div>
                <CloudSpan className="CloudSpan"/>
                <div className="RightBelowCloud">

                </div>
            </div>
        </div>
    )
}

export default Welcome;