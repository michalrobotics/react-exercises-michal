import { useState } from "react";
import RecipesContext from "./recipes-context";

const RecipesProvider = (props) => {
    const [recipes, setRecipes] = useState([]);

    const addRecipeHandler = (recipe) => {
        setRecipes((prevRecipes) => {
            const newRecipe = {...recipe, id: prevRecipes.length};
            return [...prevRecipes, newRecipe];
        });
    }

    const removeRecipeHander = (id) => {
        setRecipes((prevRecipes) => (
            prevRecipes.filter((recipe) => recipe.id !== id)
        ));
    }

    const ctx = {
        recipes,
        addRecipe: addRecipeHandler,
        removeRecipe: removeRecipeHander
    };

    return <RecipesContext.Provider value={ctx}>
        {props.children}
    </RecipesContext.Provider>
}

export default RecipesProvider;
