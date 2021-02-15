import React from 'react';
import './item-details-content.css';

const Content = ({item, label, field}) => {

  /* item is set from ItemDetailes, it's set as property at React.cloneElement.
  * label and field are set in detailes at each pages.
  * item finds same key as field and uses its value
  */

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
