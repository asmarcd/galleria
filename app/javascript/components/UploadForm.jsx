import React, { useState } from 'react';
import { openUploadWidget } from './util/CloudinaryService';
import axios from 'axios';

const UploadForm = props => {

    const [newImages, setNewImages] = useState([]);
    const [caption, setCaption] = useState("")

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

    const handleChange = e => {
        setCaption(e.target.value)
    };

    const photoSave = e => {
        e.preventDefault();

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        if (newImages.length > 0) {
            newImages.forEach(image => {

                let upload = {
                    name: image.original_filename,
                    caption: caption,
                    url: image.url
                }

                axios.post('api/v1/images/create', upload);

                setNewImages([]);
                props.galleryRefresh();

            }).then(res => { console.log(res) }).catch(res => console.log(res))
        } else {
            alert("You need to upload photos before you can save them to your gallery. Click upload to open the upload tool, then add a caption to your photo(s) and click Save.")
        }
    };

    return (
        <div>
            <section className='is-centered buttons'>
                <button className='button' onClick={() => beginUpload("image")}>Upload</button>
            </section>
            <form className='container' style={{ width: "33vw" }}>
                <input type='text' className='input is-rounded' placeholder='Write a caption' onChange={handleChange} />
                <br />
                <br />
                <button className='button' onClick={photoSave}>Save</button>
            </form>
        </div>
    );

};

export default UploadForm;