import { Dummy } from "./design-system/primitives";
import {fetchLatestImages} from './utils/api'
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    console.log('effect')
    fetchLatestImages(4).then(res => console.log(res))
  }, []);

  return (
    <div className="App">
      <Dummy color='adel'> Dummy test</Dummy>
    </div>
  );
}

export default App;
