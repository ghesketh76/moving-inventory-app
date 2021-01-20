import React, { Component } from 'react';
import './App.css';

const roomsURL = 'http://localhost:3000/rooms'

class App extends Component {

  state = {
    rooms: []
  }

  componentDidMount(){
    fetch(roomsURL)
      .then(response => response.json())
      .then(rooms => this.setState({rooms}))
  }

  renderRoomName = () => {
    this.state.rooms.map(room => console.log())
  }

  render(){
    return (
      <div className="App">
        <h1>Moving App</h1>
        {this.renderRoomName()}
      </div>
    );
  }
}

export default App;
