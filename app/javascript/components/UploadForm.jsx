import React, { useState } from 'react';
import { openUploadWidget } from './util/CloudinaryService';
import axios from 'axios';

const UploadForm = () => {

    const [newImages, setNewImages] = useState([]);

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

    // TODO: make page refresh on new state
    // TODO: make console log for no photos into alert
    // TODO: add ability to add caption to save button (need a form for that)


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
        <section className = 'is-centered buttons'>
            <button className= 'button' onClick={() => beginUpload("image")}>Upload</button>
            <button className= 'button' onClick={photoSave}>Save</button>
        </section>
    );

};

export default UploadForm;