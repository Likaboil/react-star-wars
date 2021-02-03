import React, { Component } from 'react';
import './people-page.css';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../api';
import Row from '../row';
import ErrorBoundry from '../error-boundry/error-boundry';

export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  }

  render() {
    const {getAllPeople, getPerson, getPersonImage} = this.swapiService;
    const {selectedPerson} = this.state;

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
          getData={getAllPeople} >
        {(item) => `${item.name} (${item.birthYear})`}
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={selectedPerson}
            getData={getPerson}
            getImageUrl={getPersonImage}
        />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={itemDetails} />
    );
  }
}
