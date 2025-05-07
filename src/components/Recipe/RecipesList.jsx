import { useContext } from "react";

import RecipesContext from "../../store/recipes-context";
import Recipe from './Recipe';

const RecipeList = (props) => {
    const recipesCtx = useContext(RecipesContext);

    const recipeListHTML = recipesCtx.recipes.map((recipe) => (
        <Recipe
            key={recipe.id}
            name={recipe.name}
            image={recipe.image}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
        />
    ));

    return (
        <ul>
            {recipeListHTML}
        </ul>
    );
}

export default RecipeList;
