import React from 'react';

function DropSnapshot(props) {
    const {message_id, receiver, lat, long} = props.drop
    return (
        <div>
            <h1>{receiver}</h1>
            <h2>{lat}, {long}</h2>
        </div>
    )
}

export default DropSnapshot;