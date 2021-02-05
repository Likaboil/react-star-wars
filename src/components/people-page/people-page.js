import React, { Component } from 'react';
import './people-page.css';

import SwapiService from '../../api';
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

  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  }

  render() {
    const {selectedPerson} = this.state;

    const itemList = (
      <ErrorBoundry >
        <PersonList onItemSelected={this.onPersonSelected} />
        <PlanetList onItemSelected={this.onPersonSelected} />
        <StarshipList onItemSelected={this.onPersonSelected} />
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={3}>
        </PersonDetails>
        <PlanetDetails itemId={5}>
        </PlanetDetails>
        <StarshipDetails itemId={9}>
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
