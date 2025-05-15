import React from "react";

const RecipesContext = React.createContext({
    recipes: [],
    addRecipe() {},
    removeRecipe() {}
});

export default RecipesContext;
