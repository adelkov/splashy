import React, { useContext } from "react";
import { ImageContext } from "../../providers/ImagesProvider";
import ImageBoard from "../../components/ImageBoard";

function Gallery() {
  const { images, makeFavorite } = useContext(ImageContext);
  return (
    <div>
      <ImageBoard images={images} makeFavorite={makeFavorite} />
    </div>
  );
}

export default Gallery;
