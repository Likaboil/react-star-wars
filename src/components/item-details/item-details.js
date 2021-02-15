import React, {Component} from 'react';
import './item-details.css';

import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';
import Spinner from '../spinner';


export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
    loading: true,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl) {
          this.updateItem();
    };
  }

  onLoading() {
    this.setState({
      loading: true
    });
  }

  updateItem() {

    //Gets Id in each page from list.

    const {itemId, getData, getImageUrl} = this.props;

    if(!itemId) {
      return;
    };

    this.onLoading();

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false,
        });
      });
  }

  render() {
    const {item, image, loading} = this.state;

    if (!item) {
      return (
        <div className="item-details card">
          <span>Select an item from the list</span>
        </div>
      );
    };

    if (loading) {
      return (
        <div className="item-details card">
          <Spinner />
        </div>
      );
    };

    const {name} = item;

    /* React.Children.map() cycle to work with child components easier
    * this.props.children - array of children
    * child - each item in childern
    * React.cloneElement(child, {item}) - creates modified copies and adds new property item.
    * Field and label sets in Content
    */

    return (
      <ErrorBoundry>
        <div className="item-details card">
          <img className="item-image"
              src={image}
              alt={name} />
          <div className="card-body">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })}
            </ul>
            <ErrorButton />
          </div>
        </div>
      </ErrorBoundry>
    )
  }
}
