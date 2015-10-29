import { combineReducers } from 'redux';
import { recipes, likes } from '../../../feed/modules/reducers/index';

const app = combineReducers({
    recipes,
    likes
});

export default app;
