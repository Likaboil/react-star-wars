import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import PlanetRandom from '../planet-random';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';


export default class App extends Component {

  state = {
    showRandomPlanet: true,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <PlanetRandom /> :  null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}
        <button className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet} >
          Toggle Random Planet
        </button>
        <ErrorButton />
        <PeoplePage />
      </div>
    );
  }
};
