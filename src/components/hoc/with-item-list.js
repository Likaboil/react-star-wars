import React, { Component } from 'react';
import Spinner from '../spinner';

const withItemList = (ElementList) => {
  return class extends Component {
    state = {
      listData: null,
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      };
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.props.getData()
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
