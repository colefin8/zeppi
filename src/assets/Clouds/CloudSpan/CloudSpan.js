import * as React from "react";
import './CloudSpan.scss';

function CloudSpan(props) {
  	return (
		<svg 
			width="100%"
			height="100%" 
			viewBox="0 0 1920 452.3" 
			style={{overflow: "visible", enableBackground: "new 0 0 1920 452.3"}}
			className="CloudSpan"
			{...props}
		>
			<style />
			<defs>
				<filter id="cloudFilter" className="cloudShadow" width="150%" height="150%">
					<feOffset result="offOut" in="SourceGraphic" dx="0" dy="-10" />
					<feColorMatrix result="matrixOut" in="offOut" type="matrix"
					values="0.1 0 0 0 0 0 0.15 0 0 0 0 0 0.27 0 0 0 0 0 .62 0"/>
					<feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="15" />
					<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
				</filter> 		
			</defs>
			<g className="CloudSpanPaths cloudShadow">
				<path id="LeftBack" className="cloudRow0 cloudShadow" filter="url(#cloudFilter)" d="M56.7,84.3c-3.9,0-7.8,0.3-11.5,0.8c0-0.3,0-0.6,0-0.8c0-26.9-18.9-49.4-44.1-54.9v77.4
					c0,0,0,0,0,0l0,115.5c14.4,13.9,34,22.4,55.7,22.4c44.3,0,80.2-35.9,80.2-80.2C136.9,120.2,101,84.3,56.7,84.3z"/>
				<path id="LeftFront" className="cloudRow1 cloudShadow" d="M57.6,87.2c-3.9,0-7.8,0.3-11.5,0.8c0-0.3,0-0.6,0-0.8c0-27.5-19.8-50.4-45.9-55.3
					l0,79.5c0,0,0,0,0,0L0,223.3c14.6,15,35,24.4,57.6,24.4c44.3,0,80.2-35.9,80.2-80.2C137.8,123.1,101.9,87.2,57.6,87.2z"/>
				<path id="RightBack" className="cloudRow0 cloudShadow" filter="url(#cloudFilter)" d="M1920,160.4L1920,0c-0.7,0-1.4,0-2.1,0c-39.2,0-71.8,28.1-78.8,65.3
					c-3.3-0.6-6.6-0.9-10.1-0.9c-20.8,0-38.9,11.3-48.7,28.1c-10.3-13.6-26.5-22.3-44.9-22.3c-31.1,0-56.2,25.2-56.2,56.2
					c0,31.1,25.2,56.2,56.2,56.2c20.8,0,38.9-11.3,48.7-28.1c10.3,13.6,26.5,22.3,44.9,22.3c20.5,0,38.5-11,48.3-27.5
					c11.9,7,25.8,11,40.6,11C1918.6,160.4,1919.3,160.4,1920,160.4z"/>
				<path id="RightFront" className="cloudRow1 cloudShadow" d="M1920,162.4l0-160.4c0,0-0.1,0-0.1,0c-39.2,0-71.8,28.1-78.8,65.3
					c-3.3-0.6-6.6-0.9-10.1-0.9c-20.8,0-38.9,11.3-48.7,28.1c-10.3-13.6-26.5-22.3-44.9-22.3c-31.1,0-56.2,25.2-56.2,56.2
					c0,31.1,25.2,56.2,56.2,56.2c20.8,0,38.9-11.3,48.7-28.1c10.3,13.6,26.5,22.3,44.9,22.3c20.5,0,38.5-11,48.3-27.5
					c11.9,7,25.8,11,40.6,11C1919.9,162.4,1920,162.4,1920,162.4z"/>
				<path id="MiddleBack" className="cloudRow0 cloudShadow" filter="url(#cloudFilter)" d="M1207.2,209.3c0-51.9-42.1-94-94-94c-9.1,0-18,1.3-26.3,3.7
					c-14.4-32-46.5-54.2-83.8-54.2c-15.3,0-29.7,3.7-42.3,10.3c-10.8-13.1-27.2-21.5-45.5-21.5c-32.5,0-58.9,26.3-58.9,58.8
					c-7.6-3.6-16-5.6-25-5.6c-22.1,0-41.3,12.2-51.3,30.1c-8.9-5-19.2-7.8-30.2-7.8c-20.8,0-39.3,10.2-50.5,26
					c-15.3-11.3-34.2-18-54.6-18c-50.1,0-90.9,40.1-91.8,90c-9.3-5.7-20.2-9-31.8-9c-33.6,0-60.9,27.3-60.9,60.9
					c0,17.8,7.6,33.8,19.8,44.9l-82.1,30.8h755.3v-60.3C1185.1,279.4,1207.2,246.9,1207.2,209.3z"/>
				<path id="MiddleFront" className="cloudRow2 cloudShadow" d="M1209.1,211.2c0-51.9-42.1-94-94-94c-9.1,0-18,1.3-26.3,3.7
					c-14.4-32-46.5-54.2-83.8-54.2c-15.3,0-29.7,3.7-42.3,10.3c-10.8-13.1-27.2-21.5-45.5-21.5c-32.5,0-58.9,26.3-58.9,58.8
					c-7.6-3.6-16-5.6-25-5.6c-22.1,0-41.3,12.2-51.3,30.1c-8.9-5-19.2-7.8-30.2-7.8c-20.8,0-39.3,10.2-50.6,26
					c-15.3-11.3-34.2-18-54.6-18c-50.1,0-90.9,40.1-91.8,90c-9.3-5.7-20.2-9-31.8-9c-33.6,0-60.9,27.3-60.9,60.9
					c0,17.8,7.6,33.8,19.8,44.9l-82.1,30.8H1155v-60.3C1187,281.3,1209.1,248.9,1209.1,211.2z"/>
				<path id="LeftBack" className="cloudRow0 cloudShadow" filter="url(#cloudFilter)" d="M586.7,207.4c-9,0-17.6,1.8-25.4,5.1c-11.3-44.4-51.6-77.3-99.5-77.3
					c-14.5,0-28.2,3-40.7,8.4C407.4,108.1,373.1,83,332.8,83c-4.5,0-9,0.3-13.4,0.9c-10-20.4-31-34.4-55.2-34.4
					c-26,0-48.3,16.2-57.2,39c-2.1-0.2-4.2-0.3-6.3-0.3c-21,0-39.7,9.5-52.2,24.4c-8.8-4.4-18.6-6.8-29.1-6.8
					c-36.1,0-65.4,29.3-65.4,65.4c0,3.1,0.2,6.2,0.7,9.2c-4.5-0.7-9.1-1-13.8-1c-14.7,0-28.5,3.4-40.9,9.4l0,167.8
					c12.3,6,26.2,9.4,40.9,9.4c31.9,0,60-16,76.8-40.4h290.9c15.5,9.4,33.7,14.8,53.2,14.8c19.5,0,37.7-5.4,53.2-14.8h33.4
					c10.8,7.8,24,12.4,38.4,12.4c36.1,0,65.4-29.3,65.4-65.4C652.1,236.6,622.8,207.4,586.7,207.4z"/>
				<path id="LeftFront" className="cloudRow2 cloudShadow" d="M588.6,209.3c-9,0-17.6,1.8-25.4,5.1c-11.3-44.4-51.6-77.3-99.5-77.3
					c-14.5,0-28.2,3-40.7,8.4C409.4,110,375,84.9,334.7,84.9c-4.5,0-9,0.3-13.4,0.9c-10-20.4-31-34.4-55.2-34.4
					c-26,0-48.3,16.2-57.2,39c-2.1-0.2-4.2-0.3-6.3-0.3c-21,0-39.7,9.5-52.2,24.4c-8.8-4.4-18.6-6.8-29.1-6.8
					C85.3,107.8,56,137,56,173.2c0,3.1,0.2,6.2,0.7,9.2c-4.5-0.7-9.1-1-13.8-1c-15.4,0-30,3.7-42.8,10.4l0,165.9
					c12.8,6.6,27.4,10.4,42.8,10.4c31.9,0,60-16,76.8-40.4h290.9c15.5,9.4,33.7,14.8,53.2,14.8c19.5,0,37.7-5.4,53.2-14.8h33.4
					c10.8,7.8,24,12.4,38.3,12.4c36.1,0,65.4-29.3,65.4-65.4C654,238.6,624.7,209.3,588.6,209.3z"/>
				<path id="RightBack" className="cloudRow0 cloudShadow" filter="url(#cloudFilter)" d="M1919.7,102.5c-9.3-4.5-19.7-7-30.8-7c-30.7,0-56.8,19.5-66.6,46.8
					c-13.8-9.8-30.7-15.5-48.9-15.5c-12.5,0-24.3,2.7-35,7.6c-17.9-26.9-48.4-44.7-83.2-44.7c-11.8,0-23.1,2.1-33.6,5.8
					c-7-29.4-33.4-51.2-65-51.2c-24.1,0-45.1,12.7-56.9,31.8c-10.8-6.9-23.6-11-37.4-11c-29.5,0-54.6,18.4-64.7,44.2
					c-9.6-5.4-20.7-8.4-32.5-8.4c-23.6,0-44.3,12.3-56.2,30.7c-14.4-7.2-30.7-11.3-47.9-11.3c-46.7,0-86.4,30-100.9,71.7
					c-8.1-3.5-17-5.4-26.3-5.4c-36.9,0-66.8,29.9-66.8,66.8s29.9,66.8,66.8,66.8c19.1,0,36.3-8,48.5-20.9
					c9.8,10.7,21.8,19.4,35.3,25.4v19.1h702l0-114l0,0V102.5z"/>
				<path id="RightFront" className="cloudRow2 cloudShadow" d="M1920,232.6l-0.3-19.7l-0.1-39.7l-0.4-0.1l-0.9-70c-8.5-3.6-17.8-5.6-27.5-5.6
						c-30.7,0-56.8,19.5-66.6,46.8c-13.8-9.8-30.7-15.5-48.9-15.5c-12.5,0-24.3,2.7-35,7.6c-17.9-26.9-48.4-44.7-83.2-44.7
						c-11.8,0-23.1,2.1-33.6,5.8c-7-29.4-33.4-51.2-65-51.2c-24.1,0-45.1,12.7-56.9,31.8c-10.8-6.9-23.6-11-37.4-11
						c-29.5,0-54.6,18.4-64.7,44.2c-9.6-5.4-20.7-8.4-32.5-8.4c-23.6,0-44.3,12.3-56.2,30.7c-14.4-7.2-30.7-11.3-47.9-11.3
						c-46.7,0-86.4,30-100.9,71.7c-8.1-3.5-17-5.4-26.3-5.4c-36.9,0-66.8,29.9-66.8,66.8s29.9,66.8,66.8,66.8c19.1,0,36.3-8,48.5-20.9
						c9.8,10.7,21.8,19.4,35.3,25.4v19.1H1920l-0.2-113.2C1919.9,232.6,1919.9,232.6,1920,232.6z"/>
				<path id="Back" className="cloudRow3 cloudShadow" filter="url(#cloudFilter)" d="M1673.1,249.5c9.2-11.8,14.7-26.5,14.7-42.6c0-38.3-31-69.3-69.3-69.3c-24.2,0-45.5,12.4-57.9,31.2
					c-9-2.4-18.5-3.6-28.2-3.6c-36.7,0-69.3,17.8-89.5,45.3c-9.1-20.7-29.8-35.1-53.8-35.1c-21.4,0-40.1,11.4-50.4,28.5
					c-22.2-29.5-57.5-48.6-97.2-48.6c-44.1,0-82.7,23.5-104,58.7c-8.3-4.5-17.8-7-27.9-7c-32.5,0-58.8,26.3-58.8,58.8c0,0.3,0,0.6,0,1
					c-7.5-1.9-15.4-3-23.6-3c-51.9,0-94,42.1-94,94c0,3.9,0.3,7.8,0.7,11.6c-5.7-1.9-11.6-3.1-17.8-3.7
					c-6.5-55.1-53.4-97.9-110.3-97.9c-7.4,0-14.6,0.7-21.5,2.1c-0.5-32-26.6-57.9-58.7-57.9c-9,0-17.5,2-25.1,5.6
					c0-0.9,0.1-1.8,0.1-2.8c0-38.3-31-69.3-69.3-69.3c-31.8,0-58.6,21.5-66.8,50.7c-8.3-2.8-17.1-4.4-26.4-4.4
					c-41.5,0-75.7,31-80.8,71c-9.2-2.3-18.8-3.5-28.7-3.5c-19.3,0-37.4,4.6-53.5,12.8c-8.2-22.5-29.8-38.6-55.2-38.6
					c-32.5,0-58.8,26.3-58.8,58.8c0,30.4,23.1,55.5,52.8,58.5l1357.4,57.5c36.4-8.2,63.6-40.7,63.6-79.5
					C1735,290.4,1708.7,258.3,1673.1,249.5z"/>
				<path id="Front" className="cloudRow0 cloudShadow" d="M1675.1,251.4c9.2-11.8,14.7-26.5,14.7-42.6c0-38.3-31-69.3-69.3-69.3
					c-24.2,0-45.5,12.4-57.9,31.2c-9-2.4-18.5-3.6-28.2-3.6c-36.7,0-69.3,17.8-89.5,45.3c-9.1-20.7-29.8-35.1-53.8-35.1
					c-21.4,0-40.1,11.4-50.4,28.5c-22.2-29.5-57.5-48.6-97.2-48.6c-44.1,0-82.7,23.5-104,58.7c-8.3-4.5-17.8-7-27.9-7
					c-32.4,0-58.8,26.3-58.8,58.8c0,0.3,0,0.6,0,1c-7.5-1.9-15.4-3-23.6-3c-51.9,0-94,42.1-94,94c0,3.9,0.2,7.8,0.7,11.6
					c-5.7-1.9-11.6-3.1-17.8-3.7c-6.5-55.1-53.4-97.9-110.3-97.9c-7.4,0-14.6,0.7-21.5,2.1c-0.5-32-26.6-57.9-58.7-57.9
					c-9,0-17.5,2-25.1,5.6c0-0.9,0.1-1.8,0.1-2.8c0-38.3-31-69.3-69.3-69.3c-31.8,0-58.6,21.5-66.8,50.7c-8.3-2.8-17.1-4.4-26.4-4.4
					c-41.5,0-75.7,31-80.8,71c-9.2-2.3-18.8-3.5-28.7-3.5c-19.3,0-37.4,4.6-53.5,12.8c-8.2-22.5-29.8-38.6-55.2-38.6
					c-32.5,0-58.8,26.3-58.8,58.8c0,30.5,23.2,55.5,52.8,58.5c-0.3,1.4-0.6,2.8-0.9,4.2c-31.2,1.4-56.1,27.1-56.1,58.7
					c0,12.4,3.8,23.9,10.4,33.4l66.9,0c0,0,0,0.1,0.1,0.1l188.4-0.1c0,0,0,0,0,0h304.1v-0.3h66.9c0,0,0,0,0,0H992c0-0.9,0-1.9-0.1-2.8
					c2.6,1.1,5.3,2.2,8.1,3.1l52.8,0v0h620.6v-38.9c36.4-8.2,63.6-40.7,63.6-79.5C1736.9,292.3,1710.6,260.2,1675.1,251.4z"/>
				<path id="Back" className="cloudRow0 cloudShadow" filter="url(#cloudFilter)" d="M1845,154.5c-31.7,0-59.5,16.8-74.9,42c-7.1-3.9-15.3-6.1-24-6.1c-27.9,0-50.5,22.6-50.5,50.5
					c0,0.5,0,0.9,0,1.4c-34.7,0.9-63.6,24.5-72.6,56.5c-4.7-1.4-9.7-2.2-14.8-2.2c-8.3,0-16.1,2-23,5.6c-16.8-19-41.4-31-68.8-31
					c-44.5,0-81.5,31.6-90,73.5c-9.3-5.1-20-8-31.4-8c-35,0-63.5,27.3-65.7,61.7c-4.6-1.7-9.5-2.6-14.6-2.6c-10.7,0-20.5,4-28,10.5
					c-12.4-32.3-43.7-55.2-80.4-55.2c-9,0-17.6,1.4-25.8,3.9c-4.7-34.4-29.2-62.5-61.6-72.5c-6.2-51-49.6-90.5-102.3-90.5
					c-41.2,0-76.7,24.2-93.2,59.1c-2.8-0.4-5.6-0.6-8.5-0.6c-35.1,0-63.6,28.5-63.6,63.6c0,5.1,0.6,10.1,1.8,14.9
					c-3.5-0.6-7.2-1-10.9-1c-33.8,0-61.2,27.4-61.2,61.2c0,2,0.1,3.9,0.3,5.8c-4.2-0.8-8.5-1.2-13-1.2c-21.9,0-41.6,9.8-54.7,25.4
					l-4.5,0c-6.9-26-30.6-45.1-58.8-45.1c-10.2,0-19.7,2.5-28.1,6.9c-11.5-37.6-46.5-64.9-87.9-64.9c-25.3,0-48.2,10.2-64.8,26.7
					c-7.7-25.6-31.5-44.3-59.6-44.3c-0.9,0-1.9,0-2.8,0.1c1.8-5.7,2.8-11.7,2.8-18c0-32.4-26.3-58.8-58.8-58.8
					c-15.3,0-29.3,5.9-39.8,15.5c-12.3-17.1-30.5-29.5-51.6-34.4c-1.1-32.6-27.9-58.8-60.8-58.8c-28.9,0-53.1,20.1-59.3,47.1
					c-5.2-0.9-10.5-1.4-16-1.4c-48.5,0-88.3,37.6-91.6,85.3l68.2,51.2l613.4,109H1265l137.6-16.1L1757,313.3l164-114.9
					C1905.8,172.2,1877.5,154.5,1845,154.5z"/>
				<path id="Front" className="cloudRow4 cloudShadow" d="M1842.1,158.6c-31.7,0-59.5,16.8-74.9,42c-7.1-3.9-15.3-6.1-24-6.1
					c-27.9,0-50.5,22.6-50.5,50.5c0,0.5,0,0.9,0,1.4c-34.7,0.9-63.6,24.5-72.6,56.5c-4.7-1.4-9.7-2.2-14.8-2.2c-8.3,0-16.1,2-23,5.6
					c-16.8-19-41.4-31-68.8-31c-44.5,0-81.5,31.6-90,73.5c-9.3-5.1-20-8-31.4-8c-35,0-63.5,27.3-65.7,61.7c-4.6-1.7-9.5-2.6-14.6-2.6
					c-8.9,0-17.2,2.7-24,7.4C1274.7,376,1244,354,1208,354c-9,0-17.7,1.4-25.8,3.9c-4.7-34.4-29.2-62.5-61.6-72.5
					c-6.2-51-49.6-90.5-102.3-90.5c-41.2,0-76.7,24.2-93.2,59.1c-2.8-0.4-5.6-0.6-8.5-0.6c-35.1,0-63.6,28.5-63.6,63.6
					c0,5.1,0.6,10.1,1.8,14.9c-3.5-0.6-7.2-1-10.9-1c-33.8,0-61.2,27.4-61.2,61.2c0,2,0.1,3.9,0.3,5.8c-4.2-0.8-8.5-1.2-13-1.2
					c-24,0-45.2,11.8-58.2,29.9c-5.3-28.3-30-49.7-59.8-49.7c-10.2,0-19.7,2.5-28.1,6.9c-11.5-37.6-46.5-64.9-87.9-64.9
					c-25.3,0-48.2,10.2-64.8,26.7c-7.7-25.6-31.5-44.3-59.6-44.3c-0.9,0-1.9,0-2.8,0.1c1.8-5.7,2.8-11.7,2.8-18
					c0-32.4-26.3-58.8-58.8-58.8c-15.3,0-29.3,5.9-39.8,15.5c-12.3-17.1-30.5-29.5-51.6-34.4c-1.1-32.6-27.9-58.8-60.8-58.8
					c-28.9,0-53.1,20.1-59.3,47.1c-5.2-0.9-10.5-1.4-16-1.4c-48.9,0-88.8,38.2-91.7,86.3c-12.1,1.5-23.5,5.2-33.7,10.8l0,12.3v151.2
					h92.9l0,0c0,0,0,0,0,0h361.6h256.3c0,0,0,0,0,0l559.6,0c0,0,0,0,0,0l622.3,0h27.2v-77.8V206C1905.4,177.8,1876,158.6,1842.1,158.6
					z"/>
			</g>
		</svg>
	);
}

export default CloudSpan;