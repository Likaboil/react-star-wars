import React from 'react';

import ItemList from '../../../item-list';
import {
  withItemList,
  withSwapiService,
  withChildFunction,
  compose
} from '../../../hoc';

const renderName = ({name}) => <span>{name}</span>;

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

// compose implements composition

const StarshipList =compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withItemList,
                        withChildFunction(renderName))
                        (ItemList);

export default StarshipList;
