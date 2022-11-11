import './itemCount.css';
import React,{ useEffect, useState } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const restar = () => {
        setCount(count - 1);
    }

    const sumar = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className='counter'>
            <button disabled={count <= 1} onClick={restar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={sumar}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Añadir al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;