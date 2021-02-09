import React, { Component } from 'react';
import './app.css';

import {SwapiService, TestSwapiService} from '../../api';
import {SwapiServiceProvider} from '../swapi-service-context';
import Header from '../header';
import PlanetRandom from '../planet-random';
import {PeoplePage, PlanetPage, StarshipPage} from '../pages';
import ErrorBoundry from '../error-boundry/';

import {BrowserRouter as Router, Route} from 'react-router-dom';

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
          <Router>
            <div className="stardb-app">
              <Header  onServiceChange={this.onServiceChange}/>
              <PlanetRandom />

              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
