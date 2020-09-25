import React from 'react';
import ExpandAltIcon from '../assets/icons/systemIcons/ExpandAltIcon';
import UserIcon from '../assets/icons/systemIcons/AccountIcon';

function DropSnapshot(props) {
    const {receiver, lat, long} = props.drop
    return (
        <div className="DropSnapshot snapshot">
            <div className="snapshot-content">
                <div className="snapshot-icon">
                    <UserIcon className="m-h-auto" height="1.5rem" width="1.5rem"/>
                </div>
                <div className="snapshot-info">
                    <h1 className="body-blue">@user{receiver}</h1>
                    <h2 className="caption-blue m-t-50">{lat}, {long}</h2>
                    </div>
            </div>
            <div className="snapshot-action">
                <ExpandAltIcon/>
            </div>
        </div>
    )
}

export default DropSnapshot;