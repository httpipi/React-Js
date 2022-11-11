import Item from '../Item';
import React from 'react';


const ItemList = ({data = []}) => {
    return (
        data.map(macetas => <Item key={macetas.id} info={macetas}/>)
    );
}

export default ItemList;