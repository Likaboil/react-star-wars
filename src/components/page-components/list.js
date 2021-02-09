import React from 'react';

import ItemList from '../item-list';
import {
  withItemList,
  withSwapiService,
  withChildFunction,
  compose
} from '../hoc';

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const renderName = ({name}) => `${name}`;
const renderModelandName = ({name, model}) => `${name} (${model})`;

const PersonList = compose(withSwapiService(mapPersonMethodsToProps),
                          withItemList,
                          withChildFunction(renderName)
                          )(ItemList);

const PlanetList = compose(withSwapiService(mapPlanetMethodsToProps),
                          withItemList,
                          withChildFunction(renderName)
                          )(ItemList);

const StarshipList =compose(withSwapiService(mapStarshipMethodsToProps),
                            withItemList,
                            withChildFunction(renderModelandName)
                            )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};
