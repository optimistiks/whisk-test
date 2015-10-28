import { combineReducers } from 'redux';

const recipes = function (state = [], action) {

    console.log('recipes reducer is called with', state, action);

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
