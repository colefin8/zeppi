import React from 'react';
import ExpandAltIcon from '../assets/icons/systemIcons/ExpandAltIcon';
import UserIcon from '../assets/icons/systemIcons/AccountIcon';

function Snapshot(props) {
    const {message_id, sender, lat, long} = props.loot
    return (
        <div className="Snapshot snapshot">
            <div className="snapshot-content">
                <div className="snapshot-icon">
                    <UserIcon className="m-h-auto" height="1.5rem" width="1.5rem"/>
                </div>
                <div className="snapshot-info">
                    <h1 className="body-blue">@user{sender}</h1>
                    <h2 className="caption-blue m-t-50">{lat}, {long}</h2>
                </div>
            </div>
            <div className="snapshot-action">
                <ExpandAltIcon onClick={() => props.view(message_id)}/>
            </div>
        </div>
    )
}

export default Snapshot;