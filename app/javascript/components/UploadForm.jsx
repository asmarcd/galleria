import React, { useState } from 'react';
import { openUploadWidget } from './util/CloudinaryService';
import axios from 'axios';

const UploadForm = () => {

    const [newImages, setNewImages] = useState([]);

    // TODO: set up useEffect and section tag to display images in database on page
    // TODO: Create components for individual rendered images where you can change name and caption
    // TODO: Styling

    const beginUpload = () => {
        const uploadOptions = {
            cloudName: "asmarphotocloud",
            uploadPreset: "qqu8rkik",
            folder: "shopify-submission"
        };

        openUploadWidget(uploadOptions, (error, photos) => {
            if (!error) {
                console.log(photos);
                if (photos.event === 'success') {
                    setNewImages((prevState) => ([...prevState, photos.info]))
                }
            } else {
                console.log(error);
            }
        });

    };

    const photoSave = () => {

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        if (newImages.length > 0) {
            newImages.forEach(image => {

                let upload = {
                    name: image.original_filename,
                    caption: image.original_filename,
                    url: image.url
                }

                axios.post('api/v1/images/create', upload)
            }).then(res => {
                setNewImages([])
            }).catch(res => console.log(res))
        } else {
            console.log('No photos to upload')
        }
    }

    return (
        <section className = 'buttons'>
            <button onClick={() => beginUpload("image")}>Upload Image</button>
            <button onClick={photoSave}>Save new uploaded photos</button>
        </section>
    );

};

export default UploadForm;