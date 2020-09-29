import React from 'react';
import {useSelector} from 'react-redux';
import UserIcon from '../assets/icons/systemIcons/AccountIcon';
import PlusIcon from '../assets/icons/systemIcons/PlusIcon';

function User(props) {

    const {user_name, first_name, last_name, user_id} = props.user
    const {user} = useSelector((state) => state.authReducer)
    const {userId} = user
    const {addFriend} = props

    return (
        <div className="snapshot">
            <div className="snapshot-content">
                <div className="snapshot-icon">
                    {/* PUT USER ICON HERE */}
                    <UserIcon className="m-h-auto" height="1.5rem" width="1.5rem"/>
                </div>
                <div className="snapshot-info">
                    <h1 className="body-blue">{first_name} {last_name}</h1>
                    <h2 className="caption-blue m-t-50">@{user_name}</h2>
                </div>
            </div>
            <div className="snapshot-action">
                 <PlusIcon onClick={() => {addFriend(userId, user_id)}}/>
            </div>
        </div>
    )
}

export default User;