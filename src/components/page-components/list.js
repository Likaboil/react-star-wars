import React from 'react';

import ItemList from '../item-list';
import {withItemList, withSwapiService, withChildFunction} from '../hoc';

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

const PersonList = withSwapiService(
                      withItemList(
                        withChildFunction(ItemList, renderName)),
                      mapPersonMethodsToProps)

const PlanetList = withSwapiService(
                      withItemList(
                        withChildFunction(ItemList, renderName)),
                      mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                      withItemList(
                        withChildFunction(ItemList, renderModelandName)),
                      mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};
