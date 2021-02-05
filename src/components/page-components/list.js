import React from 'react';

import ItemList from '../item-list';
import HocItemList from '../hoc';
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

const PersonList = HocItemList(
                        withChildren(ItemList,renderName),
                        getAllPeople);

const PlanetList = HocItemList(
                        withChildren(ItemList,renderName),
                        getAllPlanets);

const StarshipList = HocItemList(
                        withChildren(ItemList,renderModelandName),
                        getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
