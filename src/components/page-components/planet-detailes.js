import React from 'react';

import ItemDetails from '../item-details';
import Content from '../item-details-content';
import {withSwapiService} from '../hoc';

const mapMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

const PlanetDetails =  (props) => {

  return (
    <ItemDetails {...props} >
      <Content field="diameter" label="Diameter" />
      <Content field="population" label="Population" />
    </ItemDetails>
  );
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
