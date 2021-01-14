import React from "react";
import UploadForm from './UploadForm'
import Gallery from './Gallery'
import { CloudinaryContext } from 'cloudinary-react';

export default () => (
  <CloudinaryContext cloudName='asmarphotocloud'>
    <UploadForm />
    <Gallery />
  </CloudinaryContext>
);