import React from 'react';

export default function ItemCard(props) {
    return(
        <div className='room-card'>
            <div className='card-holder'>
                <h2>{props.item.name}</h2>
                <p>quantity: {props.item.quantity}</p>
            </div>
        </div>
    )
}