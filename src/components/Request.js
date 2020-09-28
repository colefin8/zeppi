import React from 'react';
import {useSelector} from 'react-redux';

function Request(props) {

    const {user_name, id} = props.request
    const {user} = useSelector((state) => state.authReducer)
    const {accept, deny} = props
    const {userId} = user


    return (
        <div>
        {user_name}
        <button onClick={() => accept(id, userId)}>ACCEPT</button>
        <button onClick={() => deny(id, userId)}>DENY</button>
        </div>
    )
}

export default Request;