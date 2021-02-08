import React from 'react';
import ItemDetails from '../item-details';
import Content from '../item-details-content';
import {SwapiServiceConsumer} from '../swapi-service-context';


const PlanetDetails = ({itemId}) => {
  return (

    <SwapiServiceConsumer>
     {
       ({getPlanet, getPlanetImage}) => {
         return (
          <ItemDetails itemId={itemId}
              getData={getPlanet}
              getImageUrl={getPlanetImage} >
            <Content field="diameter" label="Diameter" />
            <Content field="population" label="Population" />
          </ItemDetails>
         );
       }
     }
    </SwapiServiceConsumer>
  );
};

export default PlanetDetails;
