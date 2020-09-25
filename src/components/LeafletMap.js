import React, {useRef, useState} from "react";
import { Map, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import L from 'leaflet';
import Control from 'react-leaflet-control';
import ReactDOMServer from 'react-dom/server';

import DropIcon from '../assets/DropIcon/DropIcon';
import LootIcon from '../assets/LootIcon/LootIcon';
import CurrentLocation from '../assets/CurrentLocation/CurrentLocation';
import UserIcon from '../assets/UserIcon/UserIcon';


const LeafletMap = (props) => {
    const mapRef = useRef(null);
    const [userLocation, setUserLocation] = useState({});
// Marker Data for Loot and Drops
    const drops = [
        {
            id: '1',
            type: 'Drop',
            from: '@TommyBoy235',
            address: "810 Howell Dr Coppell, TX 77050",
            coordinates: [32.9495976,-96.9982201]
        }
    ];
    
    const loot = [
        {
            id: '1',
          name: "@tommyboy334 said 'Hah you found my drop!d'",
          coordinates: [33.6659229,-95.4699559]
        },
        {
            id: '2',
          name: "Current House",
          coordinates: [33.1169788,-97.237429]
        }
    ];

    const handleDragOver = (e) => {
        e.preventDefault()
        console.log(e, 'found LEAFLET dragover')
    }
    
    // const handleDragEnd = (e) => {
    //     e.preventDefault()
    //     console.log('HandleDrop', e.dataTransfer.getData("text/plain"))
    //     // let coordinates = target.containerPointToLatLng(L.point([e.clientX,e.clientY]))
    //     // Marker(coordinates, {icon: L.icon({iconUrl: imagePath}),
    //     //     draggable: true}).addTo(Map)
    // }

    const handleLocationFound = (e) => {
        setUserLocation({
          hasLocation: true,
          latlng: e.latlng,
        })
        console.log(userLocation);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        const map = mapRef.current
        if (map != null) {
          map.leafletElement.locate({enableHighAccuracy: true, setView: true, watch: false, maxZoom: 12});
        }
    }  

    const handleDragStart = (e) => {
        console.log('drag START from marker container')
    }
    
    const lootIcon = L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(<LootIcon/>),
        popupAnchor: [0,-45],
        iconAnchor: [15.045,40.39]
    });

    const dropIcon = L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(<DropIcon/>),
        popupAnchor: [0,-45],
        iconAnchor: [15.045,40.39]
    });

    const userIcon = L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(<UserIcon/>),
        popupAnchor: [0,-45],
        iconAnchor: [15.045,40.39]
    });

  return (  
    <div className="LeafletMap">
        <Map 
        center={[37.0902, -95.7129]} 
        ref={mapRef}
        zoom={5} 
        zoomControl={false}
        onDragOver={e => handleDragOver(e)} 
        onLocationFound={e => {
            handleLocationFound(e)
        }}
        className={'droppable'}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Map Zoom control button set */}
            <ZoomControl position="topright"/>
            {/* Control Button to display users current location once it is clicked */}
            <Control position="topright" >
                <CurrentLocation onClick={e => handleClick(e)}/>       
            </Control>
            {/* Drag and Drop Drop icon allowing the user to add a new drop from the map functions much like google street view */}
            <Control position="topright" draggable onDragOver={e => handleDragOver(e)} onDragStart={e => handleDragStart(e)}>
                <DropIcon draggable onDragOver={e => handleDragOver(e)} onDragStart={e => handleDragStart(e)}/>       
            </Control>
            {/* Map lists for each drop and list for the current user */}
            {loot.map(lootMessage => (
                <Marker
                key={lootMessage.id}
                icon={lootIcon}
                position={[
                    lootMessage.coordinates[0],
                    lootMessage.coordinates[1]
                ]}
                >
                    <Popup>
                        {lootMessage.name}
                    </Popup>
                </Marker>
            ))}
            {drops.map(dropMessage => (
                <Marker
                key={dropMessage.id}
                icon={dropIcon}
                position={[
                    dropMessage.coordinates[0],
                    dropMessage.coordinates[1]
                ]}
                >
                    <Popup>
                        {dropMessage.type} ID#{dropMessage.id}<br/>
                        Known Addresss: {dropMessage.address}<br/>
                        From: {dropMessage.from}
                    </Popup>
                </Marker>
            ))}
            {/* This section shows the user location when the current location control button is pressed */}
            {userLocation.hasLocation === true ? <Marker icon={userIcon} position={[userLocation.latlng.lat, userLocation.latlng.lng]}></Marker> : ()=> {}}
        </Map>
    </div>
  );
}

export default LeafletMap;