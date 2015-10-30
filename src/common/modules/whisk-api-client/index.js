import superagent from 'superagent';
import superagentPromise from 'superagent-promise';
import config from '../../../../config/index';

const agent = superagentPromise(superagent, Promise);


const client = {

    async searchRecipes (term) {

        try {

            const response = await agent.get(config.WHISK_API_URL).query({term: term}).end();
            // pull only unique recipes (by url) from the response
            const recipesByUrl = {};
            response.body.recipes.forEach(recipe => recipesByUrl[recipe.url] = recipe);
            response.body.recipes = Object.keys(recipesByUrl).map(recipeUrl => recipesByUrl[recipeUrl]);
            return response.body;

        } catch (exception) {

            throw {status: exception.status, body: exception.response.body};

        }

    }

};

export default client;
