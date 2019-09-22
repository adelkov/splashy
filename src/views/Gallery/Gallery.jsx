import React, { useContext, useEffect } from "react";

import ImageBoard from "../../components/ImageBoard";
import { ImageContext } from "../../providers/ImagesProvider";
import {
  LoadingSpinner,
  CenteredConainer,
  Heading
} from "../../design-system/primitives";

function Gallery() {
  let imagesToRender;
  const {
    images,
    favorites,
    searchedImage,
    toggleFavorite,
    loading,
    error,
    setError
  } = useContext(ImageContext);

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

  useEffect(() => {
    return () => setError(null);
  }, []);

  if (loading) {
    return (
      <CenteredConainer>
        <LoadingSpinner />
      </CenteredConainer>
    );
  }

  if (error) {
    return (
      <CenteredConainer>
        <Heading color="red">
          'Oops, there was something wrong with your request.'
        </Heading>
      </CenteredConainer>
    );
  }

  return (
    <div>
      <ImageBoard images={imagesToRender} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default Gallery;
