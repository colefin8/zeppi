import React, {useRef, useState} from "react";
import { Map, Marker, Popup, TileLayer, ZoomControl, Circle } from "react-leaflet";
import L from 'leaflet';
import Control from 'react-leaflet-control';
import ReactDOMServer from 'react-dom/server';

import AddDropIcon from '../assets/AddDropIcon/AddDropIcon';
import DropIcon from '../assets/DropIcon/DropIcon';
import LootIcon from '../assets/LootIcon/LootIcon';
import CurrentLocation from '../assets/CurrentLocation/CurrentLocation';
import UserIcon from '../assets/UserIcon/UserIcon';
import NewMessageModal from "./NewMessageModal";


const LeafletMap = (props) => {
    const mapRef = useRef(null);
    const [userLocation, setUserLocation] = useState({});
    const [isAddEnabled, setIsAddEnabled] = useState(false);
    const [newPendingMarker, setNewPendingMarker] = useState({});

    // drops, icon, looticon, dropicon all used for rendering the users current drops and loot items on the map
    const drops = [
        {
            id: '1',
            to: "@KrabbyP456",
            coordinates: [32.9495976,-96.9982201]
        }
    ];
    
    const loot = [
        {
            id: '1',
            from: "@Squidman2234",
            coordinates: [33.6659229,-95.4699559]
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
        // console.log('latlng', latlng)
        console.log('?',userLocation);
     
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


    // USERICON, HANDLELOCATIONFOUND, HANDLECLICK all used for current user location
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

    const handleLocationFound = (e) => {
        setUserLocation({
          hasLocation: true,
          latlng: e.latlng,
        })
        console.log(userLocation);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        const map = mapRef.current;
        if (map != null) {
          map.leafletElement.locate({enableHighAccuracy: true, setView: true, watch: false, maxZoom: 12});
        }
    }  

    const addMarker = (e) => {
        if(isAddEnabled === true) {
            const coords = e.latlng;
            setNewPendingMarker({...newPendingMarker, coords})
            
        } else {
        }
    }

    const handleAdd = () => {

    }

    console.log(newPendingMarker)
    return (  
        <div className="LeafletMap">
            {isAddEnabled && newPendingMarker ? <NewMessageModal/> : <div></div>}
            <Map 
            center={[37.0902, -95.7129]} 
            ref={mapRef}
            zoom={5} 
            zoomControl={false}
            onClick={e => addMarker(e)}
            onLocationFound={e => {
                handleLocationFound(e)
            }}
            className={isAddEnabled ? "addDrop" : ""}>
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
                <Control position="topright" draggable={true} onDragOver={e => console.log("onDragOver", e)} onDragStart={e => console.log("onDragStart", e)}  onDragEnd={e => console.log("onDragEnd", e)}>
                    <AddDropIcon className={isAddEnabled ? "color-red" : "color-gray"} onClick={e => setIsAddEnabled(!isAddEnabled)} />       
                </Control>
                {/* Map lists for each drop and list for the current user */}
                {loot.map(lootMessage => (
                    <Marker
                    key={lootMessage.id}
                    icon={lootIcon}
                    position={[
                        lootMessage.coordinates[0],
                        lootMessage.coordinates[1]
                    ]}>
                        <Popup>
                            Loot!<br/>
                            From: {lootMessage.from}
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
                    ]}>
                        <Popup>
                            Your Drop<br/>
                            To: {dropMessage.to}
                        </Popup>
                    </Marker>
                ))}
                {/* This section shows the user location when the current location control button is pressed */}
                {userLocation.hasLocation === true ? <Marker icon={userIcon} position={[userLocation.latlng.lat, userLocation.latlng.lng]}><Circle radius={1300} center={[userLocation.latlng.lat, userLocation.latlng.lng]}></Circle></Marker> : ()=> {}}
            </Map>
        </div>
    );
}

export default LeafletMap;