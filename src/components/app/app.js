import React from 'react';
import './app.css';

import Header from '../header';
import PlanetRandom from '../planet-random';
import ItemList from '../item-list';
import PersonDetails from '../person-details';


const App = () => {
  return (
    <div>
      <Header />
      <PlanetRandom />
      <div className="row">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  )
};

export default App;
