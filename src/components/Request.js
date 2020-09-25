import React from 'react';

function Request(props) {

    const {user_name} = props.request

    return (
        <div>
        {user_name}
        <button>ACCEPT</button>
        <button>DENY</button>
        </div>
    )
}

export default Request;