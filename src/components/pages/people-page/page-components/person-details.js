import React from 'react';

import {
  ItemDetails,
  Content
} from '../../../item-details'
import {
  withSwapiService
} from '../../../hoc';

const mapMethodsToProps = (swapiService) => {

  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

const PersonDetails = (props) => {

  /* <Content /> is used as children through cloning of elements
  * Check ItemDetailes to know how it work
  * props: itemId, getData and getImageUrl
  */

  return (
    <ItemDetails {...props} >
      <Content field="gender" label="Gender" />
      <Content field="eyeColor" label="Eye Color" />
      <Content field="birthYear" label="Birth Year" />
    </ItemDetails>
  );
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);
