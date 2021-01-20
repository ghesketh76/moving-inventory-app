import './RoomCard.css'
import { Link } from 'react-router-dom';

export default function RoomCard(props) {
    return(
        <div className='room-card'>
            <div className='card-holder'>
                <Link className='room-card-name' to={'/' + props.room.name}>{props.room.name}</Link>
            </div>
        </div>
    )
}