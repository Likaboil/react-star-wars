import React from 'react';

import ItemList from '../item-list';
import {withItemList, withSwapiService} from '../hoc';

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

const withChildren = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  };
};

const renderName = ({name}) => `${name}`;
const renderModelandName = ({name, model}) => `${name} (${model})`;

const PersonList = withSwapiService(
                      withItemList(
                        withChildren(ItemList, renderName)),
                      mapPersonMethodsToProps)

const PlanetList = withSwapiService(
                      withItemList(
                        withChildren(ItemList, renderName)),
                      mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                      withItemList(
                        withChildren(ItemList, renderModelandName)),
                      mapStarshipMethodsToProps);

export {
  PersonList,
  PlanetList,
  StarshipList
};
