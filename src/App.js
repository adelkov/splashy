import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Favorites from "./views/Favorites/Favorites";
import Gallery from "./views/Gallery/Gallery";
import { ImageProvider } from "./providers/ImagesContext";
import { fetchLatestImages, fetchSearchedImage } from "./utils/api";

function App() {
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
    fetchImages();
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

  const searchImage = async query => {

    const {data} = await fetchSearchedImage('dog')
    console.log(data)
    setImages([{url: data.urls.small}])
  }
  searchImage()

  return (
    <Router>
      <ImageProvider value={{ images, makeFavorite, favorites }}>
        <div>
          <Link to="/favorites">Favorites </Link>
          <Link to="/">Gallery</Link>
        </div>
        <Route path="/" exact component={Gallery} />
        <Route path="/favorites" component={Favorites} />
      </ImageProvider>
    </Router>
  );
}

export default App;
