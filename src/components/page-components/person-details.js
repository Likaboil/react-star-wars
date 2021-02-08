import React from 'react';
import ItemDetails from '../item-details';
import Content from '../item-details-content';
import {SwapiServiceConsumer} from '../swapi-service-context';

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
     {
       ({getPerson, getPersonImage}) => {
         return (
          <ItemDetails itemId={itemId}
                getData={getPerson}
                getImageUrl={getPersonImage} >
            <Content field="gender" label="Gender" />
            <Content field="eyeColor" label="Eye Color" />
            <Content field="birthYear" label="Birth Year" />
          </ItemDetails>
         );
       }
     }
    </SwapiServiceConsumer>
  );
};

export default PersonDetails;
