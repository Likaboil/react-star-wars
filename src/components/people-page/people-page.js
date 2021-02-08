import React, { Component } from 'react';
import './people-page.css';

import Row from '../row';
import ErrorBoundry from '../error-boundry/';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../page-components';

export default class PeoplePage extends Component {

  state = {
    selectedPerson: null,
    selectedPlanet: null,
    selectedStarship: null
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  }

  onPlanetSelected = (selectedPlanet) => {
    this.setState({selectedPlanet});
  }

  onStarshipSelected = (selectedStarship) => {
    this.setState({selectedStarship});
  }

  render() {
    const {selectedPerson, selectedPlanet, selectedStarship} = this.state;

    const itemList = (
      <ErrorBoundry >
        <PersonList onItemSelected={this.onPersonSelected} />
        <PlanetList onItemSelected={this.onPlanetSelected} />
        <StarshipList onItemSelected={this.onStarshipSelected} />
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={selectedPerson}>
        </PersonDetails>
        <PlanetDetails itemId={selectedPlanet}>
        </PlanetDetails>
        <StarshipDetails itemId={selectedStarship}>
        </StarshipDetails>
      </ErrorBoundry>
    );
    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
