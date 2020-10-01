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
                <div className="snapshot-info m-t-50">
                    <h1 className="body-blue">{user_name}</h1>
                </div>
            </div>
            <div className="snapshot-actions">
                <div className="snapshot-action">
                    <CheckCircleIcon className="m-h-auto" height="2rem" width="2rem" onClick={() => accept(id, userId)}/>
                </div>
                <div className="snapshot-action">
                    <CloseCircleIcon className="m-h-auto" height="2rem" width="2rem" fill="#FF3C3C" onClick={() => deny(id, userId)}/>
                </div>
            </div>
        </div>
    )
}

export default Request;