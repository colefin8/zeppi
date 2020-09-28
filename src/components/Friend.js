import React from 'react';
import ExpandAltIcon from '../assets/icons/systemIcons/ExpandAltIcon';
import UserIcon from '../assets/icons/systemIcons/AccountIcon';

function Friend(props) {

    const {user_name} = props.friend

    return (
        <div className="snapshot">
            <div className="snapshot-content">
                <div className="snapshot-icon">
                    {/* PUT USER ICON HERE */}
                    <UserIcon className="m-h-auto" height="1.5rem" width="1.5rem"/>
                </div>
                <div className="snapshot-info">
                    <h1 className="body-blue">Username</h1>
                    <h2 className="caption-blue m-t-50">@{user_name}</h2>
                </div>
            </div>
            <div className="snapshot-action">
                <ExpandAltIcon onClick={() => {}}/>
            </div>
        </div>
    )
}

export default Friend;