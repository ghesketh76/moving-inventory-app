import { Component } from "react";
import ItemsContainer from "./ItemsContainer";

const officeURL = 'http://localhost:3000/rooms/17'

export default class Office extends Component {

    state = {
        officeItems: []
    }

    componentDidMount = () => {
        fetch(officeURL)
            .then(response => response.json())
            .then(officeItems => this.setState({officeItems: officeItems.items}))
    }

    render(){
        return(
            <div className='room-items-page'>
                <h1>Office Items</h1>
                <ItemsContainer items={this.state.officeItems}/>
            </div>
        )
    }
}