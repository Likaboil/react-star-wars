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

const ListWithChildren = withChildren(
  ItemList,
  (item) => `${item.name}`
);

const PersonList = HocItemList(ListWithChildren, getAllPeople);

const PlanetList = HocItemList(ListWithChildren, getAllPlanets);

const StarshipList = HocItemList(ListWithChildren, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
