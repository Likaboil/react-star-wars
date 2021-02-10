import React from 'react';
import ItemDetails from '../item-details';
import Content from '../item-details-content';
import {withSwapiService} from '../hoc';

const mapMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};

const StarshipDetails = (props) => {

  return (
    <ItemDetails {...props} >
      <Content field="model" label="Model" />
      <Content field="length" label="Length" />
      <Content field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
