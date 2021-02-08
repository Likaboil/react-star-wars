import React from 'react';

import ItemList from '../item-list';
import {withItemList} from '../hoc';
import SwapiService from '../../api';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;


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

const PersonList = withItemList(
                        withChildren(ItemList,renderName),
                        getAllPeople);

const PlanetList = withItemList(
                        withChildren(ItemList,renderName),
                        getAllPlanets);

const StarshipList = withItemList(
                        withChildren(ItemList,renderModelandName),
                        getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
