import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
// import data from './data.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <hr />
      <div>
        <Cards
          // cities={data}
        />
      </div>
    </div>
  );
}

export default App;
