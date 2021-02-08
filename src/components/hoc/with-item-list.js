import React, { Component } from 'react';
import Spinner from '../spinner';

const withItemList = (ElementList, getData) => {
  return class extends Component {
    state = {
      listData: null,
    }

    componentDidMount() {
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

export default withItemList;
