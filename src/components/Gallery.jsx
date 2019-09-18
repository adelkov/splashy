import { Dummy } from "../design-system/primitives";
import {fetchLatestImages} from '../utils/api'
import React, { useEffect, useState } from 'react';


function Gallery() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchLatestImages(24).then(res => {
      setImages(res.data.map(item => item.urls.small))
    })
  }, []);

  return (
    <div>
      {images && images.map(image => (
        <img src={image} />
      ))}
      <Dummy color='adel'> Dummy test</Dummy>
    </div>
  );
}

export default Gallery;
