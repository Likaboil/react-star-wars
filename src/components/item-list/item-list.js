import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

import ErrorBoundry from '../error-boundry';

const ItemList = (props) => {

  /* props sets in list at each pages
  *  props is result of applying HOC:
  *  listData sets with HOC withItemList
  *  onItemSelected sets in each pages
  *  chidren to render labels sets with HOC withChildFunction
  */

  const {listData, onItemSelected, children: renderLabel} = props;

  const items = listData.map((item) => {

    const {id} = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)} >
        {label}
      </li>
    );
  });

  return (
    <ErrorBoundry>
      <ul className="item-list list-group">
        {items}
      </ul>
    </ErrorBoundry>

  );
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  listData: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;
