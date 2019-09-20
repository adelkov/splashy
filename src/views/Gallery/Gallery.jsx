import React, { useContext } from "react";
import ImageContext from "../../providers/ImagesContext";
import ImageBoard from "../../components/ImageBoard";
import {Heading} from '../../design-system/primitives'

function Gallery() {
  const { images, makeFavorite } = useContext(ImageContext);

  return (
    <div>
      <Heading>
      Latest images from Splash
      Search Functionality HERE
        </Heading> 
      
      <ImageBoard images={images} makeFavorite={makeFavorite} />
    </div>
  );
}

export default Gallery;
