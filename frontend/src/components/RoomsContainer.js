// import RoomCard from './RoomCard'
import React from 'react';
import RoomCard from './RoomCard';

import './RoomContainer.css'

export default function RoomsContainer(props) {

    const showRooms = () => {
        return props.rooms.map(room => <RoomCard room={room}/>)
    }

    return(
        <div id='room-cards-container'>
            <h1>Rooms</h1>
            {showRooms()}
        </div>
    )
}