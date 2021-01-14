import React from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import { openUploadWidget } from './util/CloudinaryService';

const UploadForm = () => {

    // TODO: use image url from cloudinary to populate info in postgresql
    // TODO: set up useEffect and section tag to display images in database on page
    // TODO: Create components for individual rendered images where you can change name and caption
    // TODO: Styling

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
            <button onClick={() => beginUpload("image")}>Upload Image</button>
        </CloudinaryContext>
    );

};

export default UploadForm;