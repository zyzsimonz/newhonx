import React, { useEffect, useState } from "react";
import { Galleria } from 'primereact/galleria';
import PhotoService from '../services/PhotoService';

import '../style/gallary.css'

export default function Gallary() {
    const [images, setImages] = useState(null);

    // data = PhotoService()
    
    useEffect(() => {
       setImages(PhotoService());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} />;
    };

    return (
        <div className="galleria-container">
            <Galleria value={images} showThumbnails={false} showIndicators autoPlay item={itemTemplate} />
        </div>
    )
}