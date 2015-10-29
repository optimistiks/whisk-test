export const recipes = function (state = [], action) {

  switch (action.type) {

    case 'LOAD_RECIPES':
      return action.payload;

    default:
      return state;

  }

};

export const likes = function (state = {}, action) {

  switch (action.type) {

    case 'LOAD_LIKES':
      // build a {recipeUrl: like} map, so we can check if a recipe is liked in constant time
      const likesByRecipes = action.payload.reduce((obj, like) => {
        obj[like.getRecipeUrl()] = like;
        return obj;
      }, {});
      return likesByRecipes;

    case 'LIKE':
      const like = action.payload;
      return Object.assign({}, state, {[like.getRecipeUrl()]: like});

    case 'DISLIKE':
      const newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;

    default:
      return state;

  }

};
