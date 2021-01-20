import { Component } from "react";
import ItemsContainer from './ItemsContainer'

const bathroomURL = 'http://localhost:3000/rooms/18'

export default class Bathroom extends Component {

    state = {
        bathroomItems: []
    }

    componentDidMount = () => {
        fetch(bathroomURL)
            .then(response => response.json())
            .then(bathroomItems => this.setState({bathroomItems: bathroomItems.items}))
    }

    render(){
        return(
            <div className='room-items-page'>
                <h1>Bathroom Items</h1>
                <ItemsContainer items={this.state.bathroomItems}/>
            </div>
        )
    }
}