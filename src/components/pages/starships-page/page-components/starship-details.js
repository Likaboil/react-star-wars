import React from 'react';

import {
  ItemDetails,
  Content
} from '../../../item-details';

import {
  withSwapiService
} from '../../../hoc';

const mapMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};

const StarshipDetails = (props) => {

  /* <Content /> is used as children through cloning of elements
  * Check ItemDetailes to know how it work
  * props: itemId, getData and getImageUrl
  */

  return (
    <ItemDetails {...props} >
      <Content field="model" label="Model" />
      <Content field="length" label="Length" />
      <Content field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
