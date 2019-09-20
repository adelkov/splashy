import React, { useContext } from "react";
import ImageBoard from "../../components/ImageBoard";
import ImageContext from "../../providers/ImagesContext";
import {Heading} from '../../design-system/primitives'


function Favorites() {
  const { favorites, makeFavorite } = useContext(ImageContext);
  return (
    <div>
      <Heading>Your favorite images!</Heading>

      <ImageBoard images={favorites} makeFavorite={makeFavorite} />
    </div>
  );
}

export default Favorites;
