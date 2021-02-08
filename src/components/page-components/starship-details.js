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

const StarshipDetails = ({itemId, getData, getImageUrl}) => {

  return (
    <ItemDetails itemId={itemId}
        getData={getData}
        getImageUrl={getImageUrl} >
      <Content field="model " label="Model" />
      <Content field="length" label="Length" />
    </ItemDetails>
  );
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
