import '../../styles/index.css';

import React from 'react';
import { connect } from 'react-redux';

import FeedPage from '../../../feed/pages/FeedPage/FeedPage.jsx';
import actionCreators from '../../modules/action-creators/index';


class App extends React.Component {

  componentWillMount() {
    console.log('App componentWillMount');
    console.log('calling dispatch');
    this.props.dispatch(actionCreators.routeParamsChange(this.props.params))
  }

  componentWillReceiveProps (nextProps) {
    console.log('App componentWillReceiveProps');
    if (nextProps.params.category !== this.props.params.category) {
      console.log('calling dispatch');
      this.props.dispatch(actionCreators.routeParamsChange(nextProps.params))
    }
  }

  render () {
    console.log('App render');
    return (<div>
      {React.cloneElement(this.props.children, {params: this.props.params})}
    </div>);
  }

}

export default connect()(App);
