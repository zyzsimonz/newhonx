import React from "react";
import { DataView } from "primereact/dataview";
import ProductsInfo from "../services/ProductService";
import { Button } from "primereact/button";

import { Galleria } from "primereact/galleria";


export default function ProductsPage() {



    const gItemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} />;
    };

    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="product-card flex flex-column align-items-center justify-content-center border-round shadow-2">
                    <div className="product-image">
                        <Galleria value={product.images} showThumbnails={false} showItemNavigators showIndicators autoPlay item={gItemTemplate} />
                    </div>
                    <div className="product-details">
                        <h2>{product.name}</h2>
                        <p>Width: {product.width}</p>
                        <p>Height: {product.height}</p>
                        <p>Length: {product.length}</p>
                        <p>Price: ${product.price}</p>
                       
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product) => {
        if (!product) {
            return;
        }

      return gridItem(product);
    };

    const listTemplate = (products) => {
        return <div className="grid grid-nogutter">{Array.isArray(products) ? products.map((product, index) => itemTemplate(product)) : null}</div>;
    };

    return (
       <div>
        <div className="card">
            <DataView value={ProductsInfo()} listTemplate={listTemplate} />
        </div>
       </div>
    );
}
