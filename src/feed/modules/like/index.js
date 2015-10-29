import Parse from '../../../common/modules/parse-client/index';


class Like extends Parse.Object {

    constructor() {
        super('Like');
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
