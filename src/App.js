import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Favorites from "./components/Favorites";
import Gallery from "./components/Gallery";
import { ImageProvider } from "./providers/ImagesContext";
import { fetchLatestImages } from "./utils/api";

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetchLatestImages(24).then(res => {
      setImages(res.data.map(item => item.urls.small));
    });
  }, []);

  return (
    <Router>
      <ImageProvider value={images}>
        <div>
          <Link to="/favorites">Favorites </Link>
          <Link to="/">Gallery</Link>
        </div>
        <Route path="/" exact component={Gallery} />
        <Route path="/favorites/" component={Favorites} />
      </ImageProvider>
    </Router>
  );
}

export default App;
