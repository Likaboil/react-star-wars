import React, { Component } from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import {PlanetList, PlanetDetails} from '../page-components';

export default class PlanetPage extends Component {

  state = {
    selectedPlanet: null
  }

  onPlanetSelected = (selectedPlanet) => {
    this.setState({selectedPlanet});
  }

  render() {
    const {selectedPlanet} = this.state;

    const itemList = (
      <ErrorBoundry >
        <PlanetList onItemSelected={this.onPlanetSelected} />
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <PlanetDetails itemId={selectedPlanet} />
      </ErrorBoundry>
    );
    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
