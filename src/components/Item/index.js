import './item.css';

import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const Item = ({ info }) => {
    const nombre = useContext(CartContext);
    console.log('Item: ', nombre)
    return (
        <Link to={`/detalle/${info.id}`} className='maceta'>
            <img src={info.imagen} alt='Imagen de maceta'/>
            <p>{info.nombre}</p>
        </Link>
    );
}

export default Item;