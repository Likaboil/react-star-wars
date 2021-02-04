import React from 'react';
import SwapiService from '../../api';
import HocItemList from '../hoc'

import './item-list.css';

const ItemList = (props) => {
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
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

const {getAllPeople} = new SwapiService();

export default HocItemList(ItemList, getAllPeople);
