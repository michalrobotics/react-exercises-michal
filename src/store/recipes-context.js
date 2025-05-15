import React from "react";

const RecipesContext = React.createContext({
    recipes: [],
    addRecipe() {}
});

export default RecipesContext;
