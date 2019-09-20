import React, { useEffect, useState } from "react";
import { fetchLatestImages, fetchSearchedImage } from "../utils/api";

export const ImageContext = React.createContext({});

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));

    const fetchImages = async () => {
      const { data } = await fetchLatestImages(24);
      const favorites = JSON.parse(localStorage.getItem("favorites"));
      const images = data.map(image => ({
        url: image.urls.small,
        isFavorite:
          favorites &&
          favorites.find(favorite => favorite.url === image.urls.small)
      }));
      setImages(images);
    };
    // fetchImages();
  }, []);

  const makeFavorite = url => {
    let currentFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (!currentFavorites) {
      currentFavorites = [];
    }

    let newFavorites;
    if (currentFavorites.find(fav => fav.url === url)) {
      newFavorites = currentFavorites.filter(fav => fav.url !== url);
    } else {
      newFavorites = currentFavorites.concat({ url, isFavorite: true });
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    setFavorites(newFavorites);
    setImages(
      images.map(image =>
        image.url === url ? { ...image, isFavorite: !image.isFavorite } : image
      )
    );
  };

  return (
    <ImageContext.Provider value={{ images, makeFavorite, favorites }}>
      {children}
    </ImageContext.Provider>
  );
};
