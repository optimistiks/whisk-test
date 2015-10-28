import '../../styles/index.css';

import React from 'react';

import FeedPage from '../../../feed/pages/FeedPage/FeedPage.jsx';
import {AppBar} from 'material-ui';


class App extends React.Component {

    render() {
        return (<div className="app-container">
            <AppBar
                title="Whisk"
                iconElementLeft={<div></div>}/>
            {React.cloneElement(this.props.children, {params: this.props.params})}
        </div>);
    }

}

export default App;
