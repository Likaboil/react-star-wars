import React, { Component } from 'react';

import Row from '../row';
import ErrorBoundry from '../error-boundry';
import {PersonList, PersonDetails} from '../page-components';

export default class PeoplePage extends Component {

  state = {
    selectedPerson: null
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  }

  render() {
    const {selectedPerson} = this.state;

    return (
      <ErrorBoundry>
        <Row
          left={<PersonList onItemSelected={this.onPersonSelected} />}
          right={<PersonDetails itemId={selectedPerson} />} />
      </ErrorBoundry>
    );
  }
}
