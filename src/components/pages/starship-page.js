import React from 'react';
import ErrorBoundry from '../error-boundry';
import {StarshipList} from '../page-components';

const StarshipsPage = () => {

  return (
    <ErrorBoundry>
      <StarshipList
        onItemSelected={() => {}} />
    </ErrorBoundry>
  );
}

export default StarshipsPage;
