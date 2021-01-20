import React, { Component } from 'react';
import './App.css';

import RoomsContainer from './components/RoomsContainer'

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

  render(){
    return (
      <div className="App">
        <h1>Moving App</h1>
        <RoomsContainer rooms={this.state.rooms}/>
      </div>
    );
  }
}

export default App;
