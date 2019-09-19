import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Favorites from "./components/Favorites";
import Gallery from "./components/Gallery";
import { ImageProvider } from "./providers/ImagesContext";
import { fetchLatestImages } from "./utils/api";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await fetchLatestImages(24);
      const favorites = localStorage.getItem("favorites");
      const images = data.map(image => ({
        url: image.urls.small,
        isFavorite: favorites && favorites.includes(image.urls.small)
      }));
      setImages(images);
    };
    fetchImages();
  }, []);

  const makeFavorite = url => {
    const currentFavorites = localStorage.getItem("favorites");
    const newFavorites = currentFavorites
      ? currentFavorites.concat(url)
      : [url];
    localStorage.setItem("favorites", newFavorites);

    setImages(
      images.map(image =>
        image.url === url ? { ...image, isFavorite: true } : image
      )
    );
  };

  return (
    <Router>
      <ImageProvider value={{ images, makeFavorite }}>
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
