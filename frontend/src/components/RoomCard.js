import './RoomCard.css'

export default function RoomCard(props) {
    return(
        <div className='room-card'>
            <p>{props.room.name}</p>
        </div>
    )
}