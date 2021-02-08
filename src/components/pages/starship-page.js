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

    const itemList = (
      <ErrorBoundry >
        <StarshipList onItemSelected={this.onStarshipSelected} />
      </ErrorBoundry>
    );

    const itemDetails = (
      <ErrorBoundry>
        <StarshipDetails itemId={selectedStarship} />
      </ErrorBoundry>
    );
    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
