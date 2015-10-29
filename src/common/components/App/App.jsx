import '../../styles/index.css';

import React from 'react';
import {AppBar} from 'material-ui';


class App extends React.Component {

    render() {
        return (<div className="app-container">
            <AppBar
                title="Whisk"
                iconElementLeft={<div></div>}/>
            {this.props.children}
        </div>);
    }

}

export default App;
