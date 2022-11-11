import './item.css';
import React from 'react';

const Item = ({ info }) => {
    return (
        <a href='#' className='maceta'>
            <img src={info.imagen} alt='Imagen de maceta'/>
            <p>{info.nombre}</p>
        </a>
    );
}

export default Item;