import { Component } from "react";
import ItemsContainer from "./ItemsContainer";

const bedroomURL = 'http://localhost:3000/rooms/19'

export default class Bedroom extends Component {

    state = {
        bedroomItems: []
    }

    componentDidMount = () => {
        fetch(bedroomURL)
            .then(response => response.json())
            .then(bedroomItems => this.setState({bedroomItems: bedroomItems.items}))
    }

    render(){
        return(
            <div className='room-items-page'>
                <h1>Bedroom Items</h1>
                <ItemsContainer items={this.state.bedroomItems}/>
            </div>
        )
    }
}