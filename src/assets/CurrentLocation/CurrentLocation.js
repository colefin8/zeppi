import * as React from "react";
import './CurrentLocation.scss';

function CurrentLocation(props) {
  return (
    <svg 
    width="2.25rem"
    height="2.25rem" 
    viewBox="0 0 30 30" 
    className="CurrentLocation"
    {...props}
    >
      <style/>
      <defs>
      </defs>
      <g>
        <g id="Group_17934_1_">
          <g id="Group_17936_2_" transform="translate(-118.939 -256.939)">
            <circle id="Ellipse_613_2_" className="st0" cx="133.9" cy="271.9" r="15"/>
          </g>
        </g>
        <linearGradient id="userIcon_3_" gradientUnits="userSpaceOnUse" x1="8.6453" y1="13.8302" x2="21.3523" y2="13.8302">
          <stop  offset="0" style={{stopColor:"#F0F0F5"}}/>
          <stop  offset="1" style={{stopColor:"#FFFFFF"}}/>
        </linearGradient>
        <path id="userIcon_2_" className="st1" d="M15,7.5c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2s3.2-1.4,3.2-3.2
          C18.2,8.9,16.8,7.5,15,7.5z M15,14.6c-2.1,0-6.4,1.1-6.4,3.2v2.4h12.7v-2.4C21.4,15.7,17.1,14.6,15,14.6z"/>
        <path id="Path_1644_1_" className="st2" d="M19.1,15.1c-1.5,0-2.7,1.2-2.7,2.7c0,1.4,2.2,4.3,2.4,4.6c0.1,0.1,0.3,0.2,0.5,0.1
          c0,0,0,0,0.1-0.1c0.2-0.3,2.4-3.2,2.4-4.6C21.8,16.3,20.6,15.1,19.1,15.1z M19.1,19.2c-0.7,0-1.4-0.6-1.4-1.4
          c0-0.7,0.6-1.4,1.4-1.4s1.4,0.6,1.4,1.4C20.4,18.5,19.8,19.2,19.1,19.2z"/>
      </g>
    </svg>
  );
}

export default CurrentLocation;