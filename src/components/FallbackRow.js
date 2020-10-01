import React from 'react';
import BellIcon from '../assets/icons/systemIcons/BellIcon';

const FallbackRow = (props) => {
    const {message} = props;
          
    return (
        <div className="FallbackRow">
            <div className="snapshot-content">
                <div className="snapshot-icon">
                    <BellIcon className="m-h-auto" height="1.5rem" width="1.5rem"/>
                </div>
                <div className="snapshot-info m-t-50">
                    <h1 className="phrase">{message}</h1>
                </div>
            </div>
        </div>        
    );
}

export default FallbackRow;