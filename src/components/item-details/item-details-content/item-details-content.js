import React from 'react';
import './item-details-content.css';

const Content = ({item, label, field}) => {

  return (
    <li className="list-group-item">
      <span className="term">
        {label}
      </span>
      <span>
        {item[field]}
      </span>
    </li>
  );
}

export default Content;
