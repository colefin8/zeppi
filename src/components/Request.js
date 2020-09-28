import React from 'react';
import {useSelector} from 'react-redux';
import UserIcon from '../assets/icons/systemIcons/AccountIcon';
import CheckCircleIcon from '../assets/icons/systemIcons/CheckCircleIcon';
import CloseCircleIcon from '../assets/icons/systemIcons/CloseCircleIcon';

function Request(props) {

    const {user_name, id} = props.request
    const {user} = useSelector((state) => state.authReducer)
    const {accept, deny} = props
    const {userId} = user


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
                <CheckCircleIcon onClick={() => accept(id, userId)}/>
                <CloseCircleIcon onClick={() => deny(id, userId)}/>
            </div>
        </div>
    )
}

export default Request;