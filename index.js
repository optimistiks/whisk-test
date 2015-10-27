import React from 'react'
import ReactDOM from 'react-dom';
import App from './src/common/components/App/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('content'));
