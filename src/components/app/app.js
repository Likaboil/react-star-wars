import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';

import {
  SwapiService,
  TestSwapiService
} from '../../api';
import {SwapiServiceProvider} from '../swapi-service-context';

import ErrorBoundry from '../error-boundry/';
import Header from '../header';
import PlanetRandom from '../planet-random';
import {StarshipDetails} from '../page-components';
import {
  PeoplePage,
  PlanetPage,
  StarshipsPage
} from '../pages';

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
              <Route path="/" exact
                     render={() => <h2>Welcome to StarDB</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route path="/starships/:id"
                render={({match}) => {
                  const {id} = match.params;

                  return (<StarshipDetails itemId={id}/>)
                }} />
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
};
