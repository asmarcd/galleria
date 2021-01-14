import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';
import React, { useState, useEffect } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);

    // useEffect(() => {
    //     axios.get('https://res.cloudinary.com/asmarphotocloud/image/upload/v1610650869/shopify-submission')
    //     .then(res => console.log(res))
    // })

    return (
        <section>
            <div>Render images here</div>
        </section>
    )
};

export default Gallery;