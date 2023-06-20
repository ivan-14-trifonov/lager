import React from 'react';
import './App.css';
import {Main} from './blocks/main';
import {Description} from './blocks/description';
import {Registration} from './blocks/registration';
import {Coordinates} from './blocks/coordinates';

function App() {
  return (
    <div className="App">
      <Main />
      <Description />
      <Registration />
      <Coordinates />
    </div>
  );
}

export default App;
