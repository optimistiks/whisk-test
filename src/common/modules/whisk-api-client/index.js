import superagent from 'superagent'
import superagentPromise from 'superagent-promise'

var agent = superagentPromise(superagent, Promise);

var URL = 'https://app.whisk.com/api/v2/recipes/_search';

var client = {

    searchRecipes (term) {

        return agent.get(URL)
            .query({term: term})
            .then(response => response.body)
            .catch(e => {
                throw {status: e.status, body: e.response.body};
            });

    }

};

export default client
