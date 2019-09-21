import React, { useContext } from "react";

import ImageBoard from "../../components/ImageBoard";
import { ImageContext } from "../../providers/ImagesProvider";

function Gallery() {
  const { images, makeFavorite, searchedImage } = useContext(ImageContext);
  const imagesToRender = window.location.pathname === '/search' ? searchedImage : images
  return (
    <div>
      <ImageBoard images={imagesToRender} makeFavorite={makeFavorite} />
    </div>
  );
}

export default Gallery;
