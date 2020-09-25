import * as React from "react";
import './DropIcon.scss';

function DropIcon(props) {
  	return (
        <svg 
        viewBox="0 0 30.1 40.4"
        width="30.1px"
        className="DropIcon"
		{...props}
		>
			<style />
			<defs>
			</defs>
            <g>
                <g>
                    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="15.066" y1="6.9356" x2="15.0694" y2="37.0695">
                        <stop  offset="7.738900e-03" style={{stopColor:"#E53C20"}}/>
                        <stop  offset="0.3989" style={{stopColor:"#C82B11"}}/>
                        <stop  offset="0.752" style={{stopColor:"#B62007"}}/>
                        <stop  offset="1" style={{stopColor:"#AF1C04"}}/>
                    </linearGradient>
                    <path className="dropIcon0" d="M15.1,0C6.7,0,0,6.9,0,15.4C0,23,12.1,36.6,14.6,39.3c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.4,0.3,0.7,0.7,0.7
                        c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.2-0.5C18,36.5,30.1,23,30.1,15.4C30.1,6.9,23.4,0,15.1,0z"/>
                </g>
                <g id="Group_17654_2_">
                    <path id="Path_7644_1_" className="dropIcon1" d="M16.9,11.8c0,0-3-2.8-4.3-3.3l2.7,23.4l0.1-0.8L16.9,11.8z"/>
                    <linearGradient id="Path_7645_3_" gradientUnits="userSpaceOnUse" x1="15.3478" y1="20.5081" x2="21.8888" y2="20.5081">
                        <stop  offset="0" style={{stopColor:"#F0F0F5"}}/>
                        <stop  offset="1" style={{stopColor:"#FFFFFF"}}/>
                    </linearGradient>
                    <path id="Path_7645_1_" className="dropIcon2" d="M21.9,9.1l-6.5,22.8l1.3-20.2L21.9,9.1z"/>
                    <path id="Path_7646_1_" className="dropIcon3" d="M14.4,12.7c-0.6-0.7-1.8-4.3-1.8-4.3l-0.2,5.9C12.4,14.4,14.3,13.4,14.4,12.7z"/>
                    <linearGradient id="Path_7647_3_" gradientUnits="userSpaceOnUse" x1="8.2451" y1="22.3364" x2="15.3478" y2="22.3364">
                        <stop  offset="0" style={{stopColor:"#F0F0F5"}}/>
                        <stop  offset="1" style={{stopColor:"#FFFFFF"}}/>
                    </linearGradient>
                    <path id="Path_7647_1_" className="dropIcon4" d="M14.4,12.7l1,19.2L8.2,15.5L14.4,12.7z"/>
                </g>
            </g>
        </svg>
	);
}

export default DropIcon;