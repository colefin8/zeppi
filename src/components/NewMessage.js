import React from 'react';
import axios from 'axios';

function NewMessage() {
    return (
        <div>
            <input placeholder="Recipient"></input>
            <input placeholder="Location"></input>
            <input placeholder="Message"></input>
            <button>SEND</button>
        </div>
    )
}

export default NewMessage;