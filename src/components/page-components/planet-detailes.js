import React from 'react';
import ItemDetails from '../item-details';
import Content from '../item-details-content';
import {withSwapiService} from '../hoc';

const PlanetDetails =  ({itemId, swapiService}) => {
  const {getPlanet, getPlanetImage}= swapiService;

  return (
    <ItemDetails itemId={itemId}
        getData={getPlanet}
        getImageUrl={getPlanetImage} >
      <Content field="diameter" label="Diameter" />
      <Content field="population" label="Population" />
    </ItemDetails>
  );
};

export default withSwapiService(PlanetDetails);
