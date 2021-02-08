import React, { Component } from 'react';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import {
  StarshipList,
  StarshipDetails
} from '../page-components';



export default class StarshipPage extends Component {

  state = {
    selectedStarship: null
  }

  onStarshipSelected = (selectedStarship) => {
    this.setState({selectedStarship});
  }

  render() {
    const {selectedStarship} = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={<StarshipList onItemSelected={this.onStarshipSelected} />}
          right={<StarshipDetails itemId={selectedStarship} />} />
      </ErrorBoundry>
    );
  }
}
