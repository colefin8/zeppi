import React from 'react';

function Snapshot(props) {
    const {message_id, sender, lat, long} = props.loot
    return (
        <div>
            <h1>{sender}</h1>
            <h2>{lat}, {long}</h2>
            <button onClick={() => props.view(message_id)}>VIEW MESSAGE</button>
        </div>
    )
}

export default Snapshot;