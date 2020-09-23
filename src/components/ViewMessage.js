import React from 'react';
import axios from 'axios';

function ViewMessage() {

    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }
    navigator.geolocation.getCurrentPosition(success);
    console.log('what is the location!!', success)

    return (
        <div>I'm a complete message!</div>
    )
}

export default ViewMessage;