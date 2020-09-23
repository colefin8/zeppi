import * as React from "react";
import './UserIcon.scss';

function UserIcon(props) {
  	return (
        <svg 
        viewBox="0 0 30.1 40.4"
        width="30.1px"
        className="UserIcon"
		{...props}
		>
			<style />
			<defs>
			</defs>
            <g id="userLocation_1_">
                <g id="userBackground_1_">
                    <linearGradient id="USERID_1_" gradientUnits="userSpaceOnUse" x1="15.067" y1="0" x2="15.067" y2="40.4098">
                        <stop  offset="0" style={{stopColor:"#64BAF8"}}/>
                        <stop  offset="1" style={{stopColor:"#0057FF"}}/>
                    </linearGradient>
                    <path className="userIcon0" d="M15.1,0C6.7,0,0,6.9,0,15.4C0,23,12.1,36.6,14.6,39.3c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.4,0.3,0.7,0.7,0.7
                        c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.2-0.5C18,36.5,30.1,23,30.1,15.4C30.1,6.9,23.4,0,15.1,0z"/>
                </g>
                <linearGradient id="userIcon_2_" gradientUnits="userSpaceOnUse" x1="6.9339" y1="15.3379" x2="23.2" y2="15.3379">
                    <stop  offset="0" style={{stopColor:"#F0F0F5"}}/>
                    <stop  offset="1" style={{stopColor:"#FFFFFF"}}/>
                </linearGradient>
                <path id="userIcon_1_" className="userIcon1" d="M15.1,7.2C12.8,7.2,11,9,11,11.3c0,2.2,1.8,4.1,4.1,4.1s4.1-1.8,4.1-4.1
                    C19.1,9,17.3,7.2,15.1,7.2z M15.1,16.4c-2.7,0-8.1,1.4-8.1,4.1v3h16.3v-3C23.2,17.7,17.8,16.4,15.1,16.4z"/>
            </g>
        </svg>
	);
}

export default UserIcon;