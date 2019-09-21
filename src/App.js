import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle } from "./design-system/primitives";
import { CustomThemeProvider } from "./providers/CustomThemeProvider";
import { ImageProvider } from "./providers/ImagesProvider";
import Favorites from "./views/Favorites/Favorites";
import Gallery from "./views/Gallery/Gallery";
import Navigation from "./views/Navigation/Navigation";

function App() {

  return (
    <Router>
      <ImageProvider>
        <CustomThemeProvider>
          <>
            <GlobalStyle bg={"background"}/>
            <Navigation />
            <Route path="/" exact component={Gallery} />
            <Route path="/search" exact component={Gallery} />
            <Route path="/favorites" component={Favorites} />
          </>
        </CustomThemeProvider>
      </ImageProvider>
    </Router>
  );
}

export default App;
