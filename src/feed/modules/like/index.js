import Parse from '../../../common/modules/parse-client/index';
import getCurrentUser from '../../../common/modules/get-current-user/index'

class Like extends Parse.Object {

    constructor() {
        super('Like');
        this.set('user', getCurrentUser());
    }

    getRecipeUrl() {
        return this.get('recipeUrl');
    }

    setRecipeUrl(recipeUrl) {
        return this.set('recipeUrl', recipeUrl);
    }

}

Parse.Object.registerSubclass('Like', Like);

export default Like;
