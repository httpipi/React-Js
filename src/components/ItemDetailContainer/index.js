import React, { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail';

const macetas = {
    "cantidad": 0,
    "id": 3,
    "nombre": "Dublin",
    "precio": 500,
    "imagen": "https://sucupots.netlify.app/img/m-15.png"
};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(macetas);
            }, 3000);
        })
        getData.then(res => setData(res))
    }, [])
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;