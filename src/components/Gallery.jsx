import React, { useContext } from "react";
import ImageContext from "../providers/ImagesContext";

function Gallery() {

  const images = useContext(ImageContext);

  return (
    <div>
      {images &&
        images.map((image, idx) => (
          <img src={image} key={image + idx} alt={image} />
        ))}
    </div>
  );
}

export default Gallery;
