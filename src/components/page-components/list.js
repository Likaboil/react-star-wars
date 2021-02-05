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

const PersonList = HocItemList(ItemList, getAllPeople);

const PlanetList = HocItemList(ItemList, getAllPlanets);

const StarshipList = HocItemList(ItemList, getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList
};
