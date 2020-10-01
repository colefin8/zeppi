import React, {useEffect, useRef, useState} from "react";
import { Map, Marker, Popup, TileLayer, ZoomControl, Circle } from "react-leaflet";
import L from 'leaflet';
import Control from 'react-leaflet-control';
import ReactDOMServer from 'react-dom/server';
import {useDispatch, useSelector} from 'react-redux';
import AddDropIcon from '../assets/AddDropIcon/AddDropIcon';
import DropIcon from '../assets/DropIcon/DropIcon';
import LootIcon from '../assets/LootIcon/LootIcon';
import CurrentLocation from '../assets/CurrentLocation/CurrentLocation';
import UserIcon from '../assets/UserIcon/UserIcon';
import NewMessageModal from "./NewMessageModal";
import {getDrops} from '../redux/messageReducer';
import {getLoot, getMessage} from '../redux/messageReducer';
import axios from 'axios';
import ExpandAltIcon from '../assets/icons/systemIcons/ExpandAltIcon';
import {useHistory} from 'react-router-dom';

const LeafletMap = () => {
    const history = useHistory()
    const mapRef = useRef(null);
    const [userLocation, setUserLocation] = useState({});
    const [isAddEnabled, setIsAddEnabled] = useState(false);
    const [lat, setLatitude] = useState();
    const [long, setLongitude] = useState()
    const dispatch = useDispatch()
    const {drops} = useSelector((state) => state.msgReducer)
    const {loot} = useSelector((state) => state.msgReducer)
    const {user} = useSelector((state) => state.authReducer)
    const {userId} = user;

    useEffect(() => {
        axios.get(`/msg/loot/${userId}`).then(res => {
            dispatch(getLoot(res.data))
        }).catch(err => console.log(err))
        axios.get(`/msg/drops/${userId}`).then(res => {
            dispatch(getDrops(res.data))
        }).catch(err => console.log(err))
    }, [dispatch, userId])
    // drops, icon, looticon, dropicon all used for rendering the users current drops and loot items on the map
    
    const view = (lootId) => {
        axios.get(`/msg/view/${lootId}`).then(res => {
            dispatch(getMessage(res.data))
            history.push(`/viewMessage/${lootId}`)
        }).catch(err => console.log(err))
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
            setLatitude(e.latlng.lat)
            setLongitude(e.latlng.lng)
        } else {

        }
    }

    const handleClose = () => {
        axios.get(`/msg/drops/${userId}`).then(res => {
            dispatch(getDrops(res.data))
        }).catch(err => console.log(err))
        setLatitude();
        setLongitude();
        setIsAddEnabled(false)
    }

    return (  
        <div className="LeafletMap">
            
            {isAddEnabled && lat && long ? <NewMessageModal longitude={long} latitude={lat} handleClose={handleClose}/> : null}
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
                {drops.map((dropMessage, index) => (
                    <Marker
                    key={index}
                    icon={dropIcon}
                    position={[
                        dropMessage.lat,
                        dropMessage.long
                    ]}>
                        <Popup key={dropMessage.id}>
                            Your Drop<br/>
                            To: {dropMessage.receiver_name}
                        </Popup>
                    </Marker>
                ))}
                {loot.map((lootMessage, index) => (
                    <Marker
                    key={index}
                    icon={lootIcon}
                    style={{zindex: "7005"}}
                    position={[
                        lootMessage.lat,
                        lootMessage.long
                    ]}>
                        <Popup key={lootMessage.id}>
                            Loot!<br/>
                            From: {lootMessage.sender_name} <br/>
                            <div className='flex justify-center m-t-50'><ExpandAltIcon color="#ffd900" onClick={e => view(lootMessage.message_id)}/></div>
                        </Popup>
                    </Marker>
                ))}

                {/* This section shows the user location when the current location control button is pressed */}
                {userLocation.hasLocation === true ? <Marker icon={userIcon} position={[userLocation.latlng.lat, userLocation.latlng.lng]}><Circle radius={40} center={[userLocation.latlng.lat, userLocation.latlng.lng]}></Circle></Marker> : null}
            </Map>
        </div>
    );
}

export default LeafletMap;