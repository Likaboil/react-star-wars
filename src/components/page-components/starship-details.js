import React from 'react';

import {
  ItemDetails,
  Content
} from '../item-details';
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
