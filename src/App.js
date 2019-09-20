import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./views/Favorites/Favorites";
import Gallery from "./views/Gallery/Gallery";
import Navigation from "./views/Navigation/Navigation";
import { ImageProvider } from "./providers/ImagesProvider";
import { DarkModeProvider } from "./providers/DarkModeProvider";
import { GlobalStyle } from "./design-system/primitives";

function App() {


  return (
    <Router>
      <ImageProvider>
        <DarkModeProvider>
          <>
            <GlobalStyle bg={"background"}/>
            <Navigation />
            <Route path="/" exact component={Gallery} />
            <Route path="/favorites" component={Favorites} />
          </>
        </DarkModeProvider>
      </ImageProvider>
    </Router>
  );
}

export default App;
