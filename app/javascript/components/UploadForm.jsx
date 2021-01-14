import React, { useState, useEffect } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import { openUploadWidget } from './util/CloudinaryService';

const UploadForm = () => {

    const [images, setImages] = useState([]);

    // useEffect(() => {
    // display photos currently in gallery
    // })

    const beginUpload = tag => {
        const uploadOptions = {
            cloudName: "asmarphotocloud",
            tags: [tag],
            uploadPreset: "qqu8rkik",
            folder: "shopify-submission"
        };

        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                console.log(photos);
                if (photos.event === 'success') {
                    setImages([...images, photos.info.public_id])
                }
            } else {
                console.log(error);
            }
        });
    };

    return (
        <CloudinaryContext cloudName='asmarphotocloud'>
            <div className="App">
                <button onClick={() => beginUpload("image")}>Upload Image</button>
                <section>
                    {/* Render images here */}
                </section>
            </div>
        </CloudinaryContext>
    );

};

export default UploadForm;