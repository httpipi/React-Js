import React, { useEffect, useState } from "react";
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import Title from '../Title';

const macetas = [
    {
        "cantidad": 0,
        "id": 1,
        "nombre": "Berlin",
        "precio": 1000,
        "imagen": "https://sucupots.netlify.app/img/m-13.png"
    },
    {
        "cantidad": 0,
        "id": 2,
        "nombre": "Paris",
        "precio": 400,
        "imagen": "https://sucupots.netlify.app/img/m-14.png"
    },
    {
        "cantidad": 0,
        "id": 3,
        "nombre": "Dublin",
        "precio": 500,
        "imagen": "https://sucupots.netlify.app/img/m-15.png"
    },
    {
        "cantidad": 0,
        "id": 4,
        "nombre": "Moscu",
        "precio": 300,
        "imagen": "https://sucupots.netlify.app/img/m-16.png"
    },
    {
        "cantidad": 0,
        "id": 5,
        "nombre": "Roma",
        "precio": 400,
        "imagen": "https://sucupots.netlify.app/img/m-17.png"
    },
    {
        "cantidad": 0,
        "id": 6,
        "nombre": "Havana",
        "precio": 500,
        "imagen": "https://sucupots.netlify.app/img/m-18.png"
    }
];

export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(macetas);
            }, 1000);
        })
        getData.then(res => setData(res))
    }, [])

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades wachiiiiiin`)
    }
    return (
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;