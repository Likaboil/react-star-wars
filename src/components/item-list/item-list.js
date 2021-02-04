import React, { Component } from 'react';
import Spinner from '../spinner';
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

const HocItemList = (ElementList) => {
  return class extends Component {
    state = {
      listData: null,
    }

    componentDidMount() {
      const {getData} = this.props;

      getData()
        .then((listData) => {
          this.setState({
            listData
          });
        });
    }

    render() {
      const {listData} = this.state;

      if(!listData) {
        return <Spinner />;
      };

      return <ElementList {...this.props} listData={listData}/>;
    }
  };
};

export default HocItemList(ItemList);
