import React, { useContext } from "react";
import ImageBoard from "../../components/ImageBoard";
import {ImageContext} from "../../providers/ImagesProvider";


function Favorites() {
  const { favorites, makeFavorite } = useContext(ImageContext);
  return (
    <div>
      <ImageBoard images={favorites} makeFavorite={makeFavorite} />
    </div>
  );
}

export default Favorites;
