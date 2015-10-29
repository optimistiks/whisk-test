import { combineReducers } from 'redux';
import { recipes, likes, searchText } from '../../../feed/modules/reducers/index';

const app = combineReducers({
    searchText,
    recipes,
    likes
});

export default app;
