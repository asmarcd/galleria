import React, { useState } from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import { openUploadWidget } from './util/CloudinaryService';

const UploadForm = () => {

    const [newImages, setNewImages] = useState([]);
    // const [uploadReady, setUploadReady] = useState(false)

    // TODO: use image url from cloudinary to populate info in postgresql
    // TODO: set up useEffect and section tag to display images in database on page
    // TODO: Create components for individual rendered images where you can change name and caption
    // TODO: Styling

    const beginUpload = () => {
        const uploadOptions = {
            cloudName: "asmarphotocloud",
            uploadPreset: "qqu8rkik",
            folder: "shopify-submission",
            tag: "shopify"
        };

        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                if (photos.event === 'success') {
                    setNewImages((prevState) => ([...prevState, photos.info]))
                }
            } else {
                console.log(error);
            }
        });
    };

    return (
        <CloudinaryContext cloudName='asmarphotocloud'>
            <button onClick={() => beginUpload("image")}>Upload Image</button>
        </CloudinaryContext>
    );

};

export default UploadForm;