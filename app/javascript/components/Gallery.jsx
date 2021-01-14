import CloudinaryContext from 'cloudinary-react/lib/components/CloudinaryContext';
import React, { useState, useEffect } from 'react';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('https://res.cloudinary.com/asmarphotocloud/image/list/shopify.json')
        .then(res => console.log(res))
    })

    return (
        <CloudinaryContext cloudName = 'asmarphotocloud'>
            <div>Render images here</div>
        </CloudinaryContext>
    )
};

export default Gallery;