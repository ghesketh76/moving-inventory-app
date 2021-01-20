import { Component } from "react";

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
            <h1>Bathroom Items</h1>
        )
    }
}