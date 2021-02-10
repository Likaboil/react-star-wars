import React, {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';

const withItemList = (ElementList) => {

  return class extends Component {

    state = {
      listData: null,
      loading: true,
      error: false
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
      this.setState({
        loading: true,
        error: false
      });

      this.props.getData()
        .then((listData) => {
          this.setState({
            listData,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            loading: false ,
            error:true
          });
        });
    }

    render() {
      const {listData, loading, error} = this.state;

      if (loading) {
        return <Spinner />;
      };

      if (error) {
        return <ErrorIndicator />;
      };

      return <ElementList {...this.props} listData={listData}/>;
    }
  };
};

export default withItemList;
