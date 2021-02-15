import React from 'react';

import {
  ItemDetails,
  Content
} from '../../../item-details'
import {
  withSwapiService
} from '../../../hoc';

const mapMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

const PlanetDetails =  (props) => {

  /* <Content /> is used as children through cloning of elements
  * Check ItemDetailes to know how it work
  * props: itemId, getData and getImageUrl
  */

  return (
    <ItemDetails {...props} >
      <Content field="diameter" label="Diameter" />
      <Content field="population" label="Population" />
    </ItemDetails>
  );
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
