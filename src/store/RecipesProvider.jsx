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

    const ctx = {
        recipes,
        addRecipe: addRecipeHandler
    };

    return <RecipesContext.Provider value={ctx}>
        {props.children}
    </RecipesContext.Provider>
}

export default RecipesProvider;
