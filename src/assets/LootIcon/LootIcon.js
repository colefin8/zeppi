import * as React from "react";
import './LootIcon.scss';

function LootIcon(props) {
  	return (
		<svg 
		viewBox="0 0 30.1 40.4"	
		width="30.1px"	
		className="LootIcon"
		{...props}
		>
			<style />
			<defs>
				<filter id="dropshadow" height="100%">
					{/* stdDeviation is how much to blur */}
					<feGaussianBlur in="SourceAlpha" stdDeviation="3"/> 
					{/* <!-- how much to offset -->					 */}
					<feOffset dx="2" dy="2" result="offsetblur"/> 
					<feComponentTransfer>
						{/* <!-- slope is the opacity of the shadow --> */}
						<feFuncA type="linear" slope="0.5"/> 
					</feComponentTransfer>
					<feMerge> 
						{/* <!-- this contains the offset blurred image --> */}
						<feMergeNode/> 
						{/* <!-- this contains the element that the filter is applied to --> */}
						<feMergeNode in="SourceGraphic"/> 
					</feMerge>
				</filter>			
			</defs>
			<g>
				<g>
					<linearGradient id="lootIcon1" gradientUnits="userSpaceOnUse" x1="15.066" y1="6.9356" x2="15.0694" y2="37.0695">
						<stop  offset="7.738900e-03" style={{stopColor:"#FFD700"}}/>
						<stop  offset="0.3989" style={{stopColor:"#E5C100"}}/>
						<stop  offset="0.752" style={{stopColor:"#D3B200"}}/>
						<stop  offset="1" style={{stopColor:"#CCAC00"}}/>
					</linearGradient>
					<path className="lootIcon0" d="M15.1,0C6.7,0,0,6.9,0,15.4C0,23,12.1,36.6,14.6,39.3c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.4,0.3,0.7,0.7,0.7
						c0.4,0,0.7-0.3,0.7-0.7c0-0.2-0.1-0.4-0.2-0.5C18,36.5,30.1,23,30.1,15.4C30.1,6.9,23.4,0,15.1,0z"/>
				</g>
				<g>
					<polygon className="lootIcon1" points="15.2,32.5 18.3,31.7 18.3,28.3 15.2,28 		"/>
					<polygon className="lootIcon2" points="11.9,31.7 14.9,32.5 14.9,28 11.9,28.3 		"/>
					<linearGradient id="lootIcon2" gradientUnits="userSpaceOnUse" x1="7.4587" y1="17.8731" x2="22.6752" y2="17.8731">
						<stop  offset="0" style={{stopColor:"#F0F0F5"}}/>
						<stop  offset="1" style={{stopColor:"#FFFFFF"}}/>
					</linearGradient>
					<path className="lootIcon3" d="M15.1,7.9c-4.2,0-7.6,3.4-7.6,7.6c0,3.8,6.1,10.5,7.4,11.8c-0.1,0.1-0.1,0.1-0.1,0.2c0,0.2,0.1,0.3,0.3,0.3
						c0.2,0,0.3-0.1,0.3-0.3c0-0.1,0-0.2-0.1-0.2c1.3-1.3,7.4-8,7.4-11.8C22.7,11.3,19.3,7.9,15.1,7.9z M14.9,27.3
						c-0.8-1-3.5-4.6-4.5-6.5c-1.1-2.2-1.1-3.3-0.6-3.6c0.5-0.4,1.2,0,2.4,2.3c1,1.9,2.4,6.6,2.8,7.9C14.9,27.2,14.9,27.2,14.9,27.3z
						M15.1,27.2C15,27.2,15,27.2,15.1,27.2c-0.4-1.3-1.6-6.2-1.6-8.5c0-2.6,0.7-3.5,1.6-3.5c0.9,0,1.6,0.8,1.6,3.5
						C16.7,21,15.5,25.9,15.1,27.2C15.1,27.2,15.1,27.2,15.1,27.2z M19.7,20.7c-1,1.9-3.7,5.5-4.5,6.5c0,0-0.1,0-0.1-0.1
						c0.4-1.3,1.9-5.9,2.8-7.9c1.1-2.2,1.9-2.6,2.4-2.3C20.8,17.5,20.9,18.5,19.7,20.7z"/>
				</g>
			</g>
		</svg>
	);
}

export default LootIcon;