import { createStore } from 'redux';
import app from '../reducers/index';

var store = createStore(app);

export default store;