import superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const agent = superagentPromise(superagent, Promise);

const URL = 'https://app.whisk.com/api/v2/recipes/_search';

const client = {

    async searchRecipes (term) {

        try {

            let response = await agent.get(URL).query({term: term}).end();
            return response.body;

        } catch (exception) {

            throw {status: exception.status, body: exception.response.body};

        }

    }

};

export default client;
