import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import  Gallery  from './components/Gallery/Gallery'
import  Navigation  from './components/Navigation/Navigation'
import { GlobalStyle } from "./design-system/primitives";
import { CustomThemeProvider } from "./providers/CustomThemeProvider";
import { ImageProvider } from "./providers/ImagesProvider";

function App() {

  return (
    <Router>
      <ImageProvider>
        <CustomThemeProvider>
          <>
            <GlobalStyle bg={"background"}/>
            <Navigation />
            <Route path="/" exact component={Gallery} />
            <Route path="/search"  component={Gallery} />
            <Route path="/favorites" component={Gallery} />
          </>
        </CustomThemeProvider>
      </ImageProvider>
    </Router>
  );
}

export default App;
