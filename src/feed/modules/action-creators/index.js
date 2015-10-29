import api from '../../../common/modules/whisk-api-client/index';
import categoryToTerm from '../category-to-term-map/index';
import ParseReact from 'parse-react';


const actionCreators = {

    loadRecipes: function (category) {

        return async function (dispatch) {

            // Create a new Comment object with some initial data
/*            ParseReact.Mutation.Create('TestObject', {
                text: 'Parse <3 React'
            }).dispatch();*/

            dispatch({type: 'LOAD_RECIPES', payload: []});

            try {
                const response = await api.searchRecipes(categoryToTerm[category]);
                dispatch({type: 'LOAD_RECIPES', payload: response.recipes})
            } catch (exception) {
                console.error('LOAD_RECIPES', exception);
            }

        };

    }

};


export default actionCreators;
