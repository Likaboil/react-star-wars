import React from 'react';
import { withRouter } from 'react-router';
import ErrorBoundry from '../error-boundry';
import {StarshipList} from '../page-components';

const StarshipsPage = ({history}) => {

  return (
    <ErrorBoundry>
      <StarshipList
        onItemSelected={(itemId) => {
          history.push(`starships/${itemId}`);
        }} />
    </ErrorBoundry>
  );
}

export default withRouter(StarshipsPage);
