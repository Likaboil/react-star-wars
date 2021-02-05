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

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
