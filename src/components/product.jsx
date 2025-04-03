import { Galleria } from 'primereact/galleria';
import React, { useState, useEffect } from 'react';

export default function Product(product) {


    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} />;
    };

    return (
        <div className="card">
            <Galleria img={product.images} item={itemTemplate} />
            <div className="product-details">
                <h2>{product.name}</h2>
                <p>Width: {product.width}</p>
                <p>Height: {product.height}</p>
                <p>Length: {product.length}</p>
                <p>Price: ${product.price}</p>
            </div>
        </div>
    );
    
}