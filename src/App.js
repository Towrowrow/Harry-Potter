import React from 'react';
import './App.css';
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <h1>API Harry Potter</h1>
      <img src='https://vignette.wikia.nocookie.net/parfum-potter/images/6/66/Poudlard_Blason.png/revision/latest/scale-to-width-down/300?cb=20170123232257&path-prefix=fr' alt='maisons' />
      <Home />
    </div >

  );
}

export default App;
