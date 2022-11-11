import React from "react";

export const ItemDetail = ({ data }) => {
    return (
        <div className="container">
            <div className="detail">
                <img className='detailImg' src={data.imagen} alt="algo" />
                <div className="content">
                    <h1>{data.nombre}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;