import React, { useContext } from "react";

import ImageBoard from "../../components/ImageBoard";
import { ImageContext } from "../../providers/ImagesProvider";

function Gallery() {
  let imagesToRender;
  const { images, favorites, searchedImage, toggleFavorite, loading, error } = useContext(ImageContext);
  switch (window.location.pathname) {
    case "/":
      imagesToRender = images.slice();
      break;
    case "/search":
      imagesToRender = searchedImage.slice();
      break;
    case "/favorites":
      imagesToRender = favorites.slice();
      break;
    default:
      break;
  }

  if (loading) {
    return (
      <div>Loading...</div>
    )
  }

  if (error) {
    return (
      <div>{error.message}</div>
    )
  }

  return (
    <div>
      <ImageBoard images={imagesToRender} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default Gallery;
