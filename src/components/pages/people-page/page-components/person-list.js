import React from 'react';

import ItemList from '../../../item-list';
import {
  withItemList,
  withSwapiService,
  withChildFunction,
  compose
} from '../../../hoc';

const renderName = ({name}) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

// compose implements composition

const PersonList = compose(
                      withSwapiService(mapPersonMethodsToProps),
                      withItemList,
                      withChildFunction(renderName))
                      (ItemList);

export default PersonList;
