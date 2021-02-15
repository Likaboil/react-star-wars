import React from 'react';

import ItemList from '../../../item-list';
import {
  withItemList,
  withSwapiService,
  withChildFunction,
  compose
} from '../../../hoc';

const renderName = ({name}) => <span>{name}</span>;

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const PlanetList = compose(
                      withSwapiService(mapPlanetMethodsToProps),
                      withItemList,
                      withChildFunction(renderName))
                      (ItemList);

export default PlanetList;
