import React, { useContext } from "react";
import { ImageContext } from "../../providers/ImagesProvider";
import ImageBoard from "../../components/ImageBoard";
import { Heading } from "../../design-system/primitives";

function Gallery() {
  const { images, makeFavorite } = useContext(ImageContext);
  return (
    <div>
      <Heading color={"heading"}>The latest images from Splash</Heading>
      <ImageBoard images={images} makeFavorite={makeFavorite} />
    </div>
  );
}

export default Gallery;
