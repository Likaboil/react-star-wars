import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-list.css';

 class ItemList extends Component {

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.children(item);

      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)} >
          {label}
        </li>
      );
    });
  }

  render() {
    const {listData} = this.props;
    const items = this.renderItems(listData);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
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
