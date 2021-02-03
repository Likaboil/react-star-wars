import React, { Component } from 'react';
import './people-page.css';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../api';
import Row from '../row';

export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: null,
    hasError: false
  }

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const {getAllPeople, getPerson, getPersonImage} = this.swapiService;
    const {hasError, selectedPerson} = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
          getData={getAllPeople} >
        {(item) => `${item.name} (${item.birthYear})`}
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails itemId={selectedPerson}
          getData={getPerson}
          getImageUrl={getPersonImage}
      />
    );

    return (
      <Row left={itemList} right={itemDetails} />
    );
  }
}
