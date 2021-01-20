import { Component } from "react";
import ItemsContainer from './ItemsContainer'

const livingRoomURL = 'http://localhost:3000/rooms/20'

export default class LivingRoom extends Component {

    state = {
        livingRoomItems: []
    }

    componentDidMount = () => {
        fetch(livingRoomURL)
            .then(response => response.json())
            .then(livingRoomItems => this.setState({livingRoomItems: livingRoomItems.items}))
    }

    render(){
        return(
            <div className='room-items-page'>
                <h1>Living Room Items</h1>
                <ItemsContainer items={this.state.livingRoomItems}/>
            </div>
        )
    }
}