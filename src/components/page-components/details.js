import React from 'react';
import ItemDetails from '../item-details';
import Content from '../item-details-content';
import SwapiService from '../../api';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage} >
      <Content field="gender" label="Gender" />
      <Content field="eyeColor" label="Eye Color" />
      <Content field="birthYear" label="Birth Year" />
    </ItemDetails>
  );
};

const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId}
        getData={getPlanet}
        getImageUrl={getPlanetImage} >
      <Content field="diameter" label="Diameter" />
      <Content field="population" label="Population" />
    </ItemDetails>
  );
};

const StarshipDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId}
        getData={getStarship}
        getImageUrl={getStarshipImage} >
      <Content field="model " label="Model" />
      <Content field="length" label="Length" />
    </ItemDetails>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
