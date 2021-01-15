import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from './Picture'

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.get('/api/v1/images/index').then(res => {
            console.log(res)
            setImages(res.data)
            setLoaded(true)
        })
    }, [])

    let pictures;
    if (loaded && images) {
        pictures = images.map((item, index) => {
            return (
                <section className='tile is-ancestor'>
                    <div className="tile is-parent">
                        <Picture
                            key={index}
                            id = {item.id}
                            name={item.name}
                            caption={item.caption}
                            url={item.url}
                        />
                    </div>
                </section>
            )
        })
    }

    return (
        <section className='gallery'>
            {pictures}
        </section>
    )
};

export default Gallery;