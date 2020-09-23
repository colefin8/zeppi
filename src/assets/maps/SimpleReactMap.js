import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

import DropIcon from '../assets/DropIcon/DropIcon';
import LootIcon from '../assets/LootIcon/LootIcon';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const txUrl = "/TexasZipCodes.json";

const drops = [
    {
      name: "Drop",
      coordinates: [-97.2905917,32.8205766]
    }
  ];
const loot = [
    {
      name: "Loot",
      coordinates: [-99, 38.17]
    }
  ];

const SimpleReactMap = () => {
  return (
      <div className="SimpleReactMap">
    <ComposableMap 
    projection="geoAlbersUsa"
    width={980}
    height={551}
    style={{
        width: "100%",
        height: "100%",
     }}
    >
        <ZoomableGroup>
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#56A6EB"
                style={{
                    default: {
                       fill: "#f2f2f2",
                       stroke: "#56A6EB",
                       strokeWidth: 0.25,
                       outline: "none",
                    },
                    hover: {
                       fill: "#CFD8DC",
                       stroke: "#56A6EB",
                       strokeWidth: 1,
                       outline: "none",
                    },
                    pressed: {
                       fill: "#FF5722",
                       stroke: "#56A6EB",
                       strokeWidth: 1,
                       outline: "none",
                    }
                 }}
              />
            ))}
          </>
        )}
      </Geographies>
      {drops.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
			<g
            transform="translate(-4.13, -10.82)"
          >
				<path className="dropIcon2" d="M9.5,0C4.3,0,0,4.3,0,9.5c0,4.7,7.6,13.1,9.2,14.7c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.2,0.2,0.4,0.4,0.4
					c0.2,0,0.4-0.2,0.4-0.4c0-0.1,0-0.2-0.1-0.3c1.6-1.7,9.2-10,9.2-14.7C19,4.3,14.7,0,9.5,0z M9.3,24.2c-1-1.3-4.4-5.8-5.6-8.2
					c-1.4-2.8-1.4-4.1-0.8-4.5c0.6-0.5,1.5,0,3,2.8c1.2,2.4,3,8.2,3.5,9.8C9.3,24.1,9.3,24.2,9.3,24.2z M9.5,24.1c0,0-0.1,0-0.1,0
					C9,22.5,7.5,16.4,7.5,13.5c0-3.3,0.9-4.3,2-4.3s2,1.1,2,4.3C11.5,16.4,10,22.5,9.5,24.1C9.6,24.1,9.5,24.1,9.5,24.1z M15.3,16
					c-1.2,2.4-4.6,6.9-5.6,8.2c0,0-0.1-0.1-0.1-0.1c0.5-1.6,2.3-7.4,3.5-9.8c1.4-2.8,2.4-3.3,3-2.8C16.7,12,16.7,13.2,15.3,16z"/>
			</g>
        </Marker>
      ))}
      {loot.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
            <LootIcon />
          </Marker>
      ))}
      </ZoomableGroup>
    </ComposableMap>
    </div>
  );
};

export default SimpleReactMap;