import React from 'react';
import ItemDetails from '../item-details';
import Content from '../item-details-content';
import {SwapiServiceConsumer} from '../swapi-service-context';

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
     {
       ({getStarship, getStarshipImage}) => {
         return (
          <ItemDetails itemId={itemId}
              getData={getStarship}
              getImageUrl={getStarshipImage} >
            <Content field="model " label="Model" />
            <Content field="length" label="Length" />
           </ItemDetails>
         );
       }
     }
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;
