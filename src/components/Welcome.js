import React from 'react';
import '../styling/components/Welcome.scss';

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
                            <p>LOGIN</p>
                        </div>
                        <div className="signup-button">
                            <p>SIGNUP</p>
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