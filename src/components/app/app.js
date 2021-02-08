import React, { Component } from 'react';
import './app.css';

import {SwapiService, TestSwapiService} from '../../api';
import {SwapiServiceProvider} from '../swapi-service-context';
import Header from '../header';
import PlanetRandom from '../planet-random';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ErrorBoundry from '../error-boundry/';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new TestSwapiService(),
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  onServiceChange = () => {
      console.log('switch');
  }

  render() {
    const planet = this.state.showRandomPlanet ? <PlanetRandom /> :  null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header  onServiceChange={this.onServiceChange}/>
            {planet}
            <div className="row mb2 button-row">
              <button className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet} >
                Toggle Random Planet
              </button>
              <ErrorButton />
            </div>
            <PeoplePage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
