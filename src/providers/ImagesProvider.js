import React, { useEffect, useState } from "react";
import { fetchLatestImages, fetchSearchedImage } from "../utils/api";

export const ImageContext = React.createContext({});

export const ImageProvider = ({ children }) => {
  const NUMBER_OF_IMAGES_TO_FETCH = 24;

  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchedImage, setSearchedImage] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
    const fetchImages = async () => {
      setLoading(true);
      try {
        const { data } = await fetchLatestImages(NUMBER_OF_IMAGES_TO_FETCH);
        const images = data.map(image => ({
          url: image.urls.small,
          isFavorite: favorites.find(
            favorite => favorite.url === image.urls.small
          )
        }));
        setImages(images);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const searchImage = async query => {
    setLoading(true);
    try {
      const { data } = await fetchSearchedImage(query);
      setSearchedImage([{ url: data.urls.small, isFavorite: false }]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = url => {
    let newFavorites;
    if (favorites.find(fav => fav.url === url)) {
      newFavorites = favorites.filter(fav => fav.url !== url);
    } else {
      newFavorites = favorites.concat({ url, isFavorite: true });
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    setFavorites(newFavorites);
    setImages(
      images.map(image =>
        image.url === url ? { ...image, isFavorite: !image.isFavorite } : image
      )
    );
    searchedImage.length === 0 ||
      setSearchedImage([
        { ...searchedImage[0], isFavorite: !searchedImage[0].isFavorite }
      ]);
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        toggleFavorite,
        favorites,
        searchImage,
        searchedImage,
        error,
        setError,
        loading
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
