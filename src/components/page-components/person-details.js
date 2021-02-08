import React from 'react';
import ItemDetails from '../item-details';
import Content from '../item-details-content';
import {withSwapiService} from '../hoc';

const PersonDetails = ({itemId, swapiService}) => {
  const {getPerson, getPersonImage}= swapiService;

  return (
    <ItemDetails itemId={itemId}
          getData={getPerson}
          getImageUrl={getPersonImage} >
      <Content field="gender" label="Gender" />
      <Content field="eyeColor" label="Eye Color" />
      <Content field="birthYear" label="Birth Year" />
    </ItemDetails>
  );
};

export default withSwapiService(PersonDetails);
