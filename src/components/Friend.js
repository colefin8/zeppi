import React from 'react';

function Friend(props) {

    const {user_name} = props.friend

    return (
        <div>
        {user_name}
        </div>
    )
}

export default Friend;