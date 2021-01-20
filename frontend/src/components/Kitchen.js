import { Component } from "react";
import ItemsContainer from "./ItemsContainer";

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
            <div className='room-items-page'>
                <h1>Kitchen Items</h1>
                <ItemsContainer items={this.state.kitchenItems}/>
            </div>
        )
    }
}