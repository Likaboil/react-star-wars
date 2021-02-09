import React, { Component } from 'react';
import './app.css';

import {SwapiService, TestSwapiService} from '../../api';
import {SwapiServiceProvider} from '../swapi-service-context';
import Header from '../header';
import PlanetRandom from '../planet-random';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import ErrorBoundry from '../error-boundry/';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {

      const Service = swapiService instanceof SwapiService ?
                        TestSwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    });
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header  onServiceChange={this.onServiceChange}/>
            <PlanetRandom />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
