import { combineReducers } from 'redux';

const recipes = function (state = [], action) {

    switch (action.type) {

        case 'LOAD_RECIPES':
            return action.payload;

        default:
            return state;

    }

};

const app = combineReducers({
    recipes
});

export default app;
