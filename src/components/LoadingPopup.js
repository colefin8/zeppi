import React, {useEffect} from 'react';
import LoadingPlanes from '../assets/Planes/LoadingPlanes/LoadingPlanes';


function LoadingPopup(props) {
    const {isLoading} = props;

    return (
        <div className="LoadingPopup">
            <div className="popup-container">
                <div className="spin-container">
                    <LoadingPlanes width="5rem" height="5rem" isLoading={isLoading}/>
                </div>
            </div>
        </div>
    )
}

export default LoadingPopup;