import React from 'react';
import {Router, Route} from 'react-router';
import { Provider } from 'react-redux';

import store from '../../modules/store/index';

import App from '../App/App.jsx';
import FeedPage from '../../../feed/components/FeedPage/FeedPage.jsx';


const Routes = (

    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                <Route path="recipes/:category" component={FeedPage}/>
            </Route>
        </Router>
    </Provider>

);

export default Routes;
