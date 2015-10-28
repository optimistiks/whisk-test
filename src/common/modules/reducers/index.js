import actions from '../action-creators/index';
import { combineReducers } from 'redux';


const routeParams = function(state = {}, action) {

  console.log('routeParams reducer is called with', state, action);

  switch (action.type) {

    case 'ROUTE_PARAMS_CHANGE':
      return Object.assign({}, state, action.params);

    default:
      return state;

  }

};

const app = combineReducers({
  routeParams
});

export default app;
