import React, { Component } from 'react';
import './people-page.css';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../api';
import Row from '../row';
import ErrorBoundry from '../error-boundry/error-boundry';
import Content from '../item-details-content';

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
            getImageUrl={getPersonImage} >
            <Content field="gender" label="Gender" />
            <Content field="eyeColor" label="Eye Color" />
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={itemDetails} />
    );
  }
}
