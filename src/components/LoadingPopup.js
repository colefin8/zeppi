import React from 'react';
import LoadingPlanes from '../assets/Planes/LoadingPlanes/LoadingPlanes';


function LoadingPopup(props) {
    return (
        <div className="LoadingPopup">
            <div className="popup-container">
                <LoadingPlanes width="12rem" height="12rem" isLoading={props.isLoading}/>
            </div>
        </div>
    )
}

export default LoadingPopup;