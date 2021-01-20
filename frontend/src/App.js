import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import RoomsContainer from './components/RoomsContainer';
import Kitchen from './components/Kitchen';
import Office from './components/Office';
import Bathroom from './components/Bathroom';
import Bedroom from './components/Bedroom';
import LivingRoom from './components/LivingRoom'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Route exact path='/' component={RoomsContainer} />
        <Route path='/kitchen' component={Kitchen}/>
        <Route path='/office' component={Office}/>
        <Route path='/bathroom' component={Bathroom}/>
        <Route path='/bedroom' component={Bedroom}/>
        <Route path='/living room' component={LivingRoom}/>
      </div>
    );
  }
}

export default App;
