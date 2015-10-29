import { combineReducers } from 'redux';
import { recipes, likes, searchText } from '../../../feed/modules/reducers/index';
import getCurrentUser from '../get-current-user/index'

const currentUser = function(state = getCurrentUser(), action) {

    switch (action.type) {

        case 'CURRENT_USER_CHANGE':
            return action.payload;

        default:
            return state;

    }

};

const app = combineReducers({
    currentUser,
    searchText,
    recipes,
    likes
});

export default app;
