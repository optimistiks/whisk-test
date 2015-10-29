import '../../styles/index.css';

import React from 'react';
import { connect } from 'react-redux';
import {AppBar} from 'material-ui';
import actionCreators from '../../modules/action-creators/index';


class App extends React.Component {

    componentWillMount() {
        if (this.props.currentUser === null) {
            this.props.dispatch(actionCreators.signUp());
        }
    }

    render() {
        return (<div className="app-container">
            <AppBar
                title="Whisk"
                iconElementLeft={<div></div>}/>
            {this.props.currentUser ? this.props.children : null}
        </div>);
    }

}

export default connect(state => {return {currentUser: state.currentUser}})(App);
