import React, { Component } from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import {
  PlanetList,
  PlanetDetails
} from '../page-components';

export default class PlanetPage extends Component {

  state = {
    selectedPlanet: null
  }

  onPlanetSelected = (selectedPlanet) => {
    this.setState({selectedPlanet});
  }

  render() {
    const {selectedPlanet} = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={<PlanetList onItemSelected={this.onPlanetSelected} />}
          right={<PlanetDetails itemId={selectedPlanet} />} />
      </ErrorBoundry>
    );
  }
}
