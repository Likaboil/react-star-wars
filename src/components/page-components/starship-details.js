import React from 'react';
import ItemDetails from '../item-details';
import Content from '../item-details-content';
import {withSwapiService} from '../hoc';

const StarshipDetails = ({itemId, swapiService}) => {
  const {getStarship, getStarshipImage}= swapiService;

  return (
    <ItemDetails itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage} >
    <Content field="model " label="Model" />
    <Content field="length" label="Length" />
    </ItemDetails>
  );
};

export default withSwapiService(StarshipDetails);
