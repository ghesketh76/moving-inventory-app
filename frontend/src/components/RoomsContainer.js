// import RoomCard from './RoomCard'
import React, { Component } from 'react';
import RoomCard from './RoomCard';

import './RoomContainer.css'

const roomsURL = 'http://localhost:3000/rooms'

export default class RoomsContainer extends Component {

    state = {
        rooms: []
    }
    
    componentDidMount(){
    fetch(roomsURL)
        .then(response => response.json())
        .then(rooms => this.setState({rooms}))
    }

    showRooms = () => {
        return this.state.rooms.map(room => <RoomCard room={room}/>)
    }

    render(){
        return(
            <div id='room-cards-container'>
                <h1>Rooms</h1>
                {this.showRooms()}
            </div>
        )
    }
}