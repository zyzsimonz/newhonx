import fs from 'fs';
import path from 'path';



export default function ProductsInfo() {

    return (

        [
            {
                id: 1,
                name: 'Galaxy Earrings',
                width: 100,
                height: 100,
                length: 100,
                price: 100,
                images: [

                    { itemImageSrc: 'images/product/1/galaxy-earrings.jpg', alt: 'test' },
                    { itemImageSrc: 'images/product/1/game-controller.jpg', alt: 'test' },
                    { itemImageSrc: 'images/product/1/gold-phone-case.jpg', alt: 'test' },
                ]
            },

            {
                id: 2,
                name: 'Galaxy Earrings',
                width: 100,
                height: 100,
                length: 100,
                price: 100,
                images: [

                    { itemImageSrc: 'images/product/1/galaxy-earrings.jpg', alt: 'test' },
                    { itemImageSrc: 'images/product/1/game-controller.jpg', alt: 'test' },
                    { itemImageSrc: 'images/product/1/gold-phone-case.jpg', alt: 'test' },
                ]
            },

            {
                id: 3,
                name: 'Galaxy Earrings',
                width: 100,
                height: 100,
                length: 100,
                price: 100,
                images: [

                    { itemImageSrc: 'images/product/1/galaxy-earrings.jpg', alt: 'test' },
                    { itemImageSrc: 'images/product/1/game-controller.jpg', alt: 'test' },
                    { itemImageSrc: 'images/product/1/gold-phone-case.jpg', alt: 'test' },
                ]
            },
        ]
    )

}