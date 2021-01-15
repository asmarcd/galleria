import React, { useState, useEffect } from "react";
import UploadForm from './UploadForm';
import Gallery from './Gallery';
import { CloudinaryContext } from 'cloudinary-react';
import './style.css';
import axios from 'axios';

const Home = () => {

  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.get('/api/v1/images/index').then(res => {
      setImages(res.data)
      setLoaded(true)
    })
  }, [])

  const galleryRefresh = () => {
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.get('/api/v1/images/index').then(res => {
      setImages(res.data)
      setLoaded(true)
    })
  }

  return (
    <CloudinaryContext cloudName='asmarphotocloud'>
      <div className='has-background-dark'>
        <header className='hero has-text-centered'>
          <main className='hero-body box'>
            <div className="container">
              <h1 className='title'>Galleria Photo Service</h1>
              <h2 className='subtitle'>Click <strong>Upload</strong> to queue up a new photo. Write a caption and click <strong>Save</strong> when you're done to add it to the database. You can edit existing photos by clicking their respective buttons. You can also add multiple photos at once, though they'll all have the same caption, if you choose to add one at that time.</h2>
              <UploadForm
                galleryRefresh={galleryRefresh}
              />
            </div>
          </main>
        </header>
        <br />
        <div className='container has-text-centered'>
          <Gallery 
          images = {images}
          loaded = {loaded}
          galleryRefresh = {galleryRefresh}
          />
        </div>
      </div>
    </CloudinaryContext>
  )
};

export default Home; 