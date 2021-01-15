import React, { useState, useEffect } from 'react';
import Picture from './Picture'

const Gallery = props => {

    const deleteRefresh = () => {
        props.galleryRefresh();
    }

    let pictures;
    if (props.loaded && props.images) {
        pictures = props.images.map((image, index) => {
            return (
                <section className='tile is-ancestor'>
                    <div className="tile is-parent">
                        <Picture
                            key={index}
                            id={image.id}
                            name={image.name}
                            caption={image.caption}
                            url={image.url}
                            galleryRefresh = {deleteRefresh}
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