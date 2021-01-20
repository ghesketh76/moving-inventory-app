import { Component } from "react";

const kitchenURL = 'http://localhost:3000/rooms/16'

export default class Kitchen extends Component {

    state = {
        kitchenItems: []
    }

    componentDidMount = () => {
        fetch(kitchenURL)
            .then(response => response.json())
            .then(kitchenItems => this.setState({kitchenItems: kitchenItems.items}))
    }

    render(){
        return(
            <h1>Kitchen Items</h1>
        )
    }
}