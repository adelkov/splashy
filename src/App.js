import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Favorites from "./views/Favorites/Favorites";
import Gallery from "./views/Gallery/Gallery";
import Navigation from "./views/Navigation/Navigation";
import { ImageProvider } from "./providers/ImagesProvider";
import { DarkModeProvider } from "./providers/DarkModeProvider";
import styled from "styled-components";
import { GlobalStyle } from "./design-system/primitives";

function App() {
  // const searchImage = async query => {

  //   const {data} = await fetchSearchedImage('dog')
  //   console.log(data)
  //   setImages([{url: data.urls.small}])
  // }
  // searchImage()

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
