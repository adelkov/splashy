import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Favorites from './components/Favorites'
import Gallery from './components/Gallery'

function App() {
  return (
    <Router>
      <div>
        <div>
            <Link to="/favorites" >Favorites </Link>
            <Link to="/" >Gallery</Link>
           </div>
        <Route path="/" exact component={Gallery} />
        <Route path="/favorites/" component={Favorites} />
      </div>
    </Router>
  );
}

export default App;
