import React, { Component } from 'react';
import SwapiService from '../../api';
import Spinner from '../spinner';
import './item-list.css';

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    itemList: null,
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)} >
          {name}
        </li>
      );
    });
  }

  render() {
    const {itemList} = this.state;

    if(!itemList) {
      return <Spinner />
    };

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
