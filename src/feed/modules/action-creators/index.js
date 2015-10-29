import api from '../../../common/modules/whisk-api-client/index';
import categoryToTerm from '../category-to-term-map/index';
import Parse from '../../../common/modules/parse-client/index';
import Like from '../like/index';
import getCurrentUser from '../../../common/modules/get-current-user/index'


const actionCreators = {

    loadRecipes: function (category) {

        return async function (dispatch) {

            try {
                const response = await api.searchRecipes(categoryToTerm[category]);
                dispatch({type: 'LOAD_RECIPES', payload: response.recipes});
            } catch (exception) {
                console.error('LOAD_RECIPES', exception);
            }

        };

    },

    loadLikes: function () {

        return async function (dispatch) {

            const query = new Parse.Query('Like');
            query.equalTo('user', getCurrentUser());

            try {

                const response = await query.find();
                dispatch({type: 'LOAD_LIKES', payload: response})

            } catch (exception) {
                console.error('LOAD_LIKES', exception);
            }

        };

    },

    dislike: function (like) {

        return async function (dispatch) {

            // optimistic update here
            dispatch({type: 'DISLIKE', payload: like.getRecipeUrl()});

            try {

                await like.destroy();

            } catch (exception) {
                console.error('DISLIKE', exception);
            }

        };

    },

    like: function (recipeUrl) {

        return async function (dispatch) {

            const like = new Like();
            like.setRecipeUrl(recipeUrl);

            // optimistic update here
            dispatch({type: 'LIKE', payload: like});

            try {

                await like.save();

            } catch (exception) {
                console.error('LIKE', exception);
            }

        };

    },

    search: function (text) {

        return {type: 'SEARCH_TEXT_CHANGE', payload: text};

    }

};


export default actionCreators;
