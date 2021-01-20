import React from 'react'
import ItemCard from './ItemCard';

export default function ItemsContainer(props) {

    const showItems = () => {
        return props.items.map(item => <ItemCard item={item}/>)
    }

    return(
        <div className='item-container'>
            {showItems()}
        </div>
    )
}