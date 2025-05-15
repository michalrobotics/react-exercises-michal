import { useContext } from "react";

import RecipesContext from "../../store/recipes-context";
import Recipe from './Recipe';
import classes from './RecipesList.module.css';

const RecipeList = (props) => {
    const recipesCtx = useContext(RecipesContext);

    const { recipes } = recipesCtx;

    const recipeListHTML = recipes.map((recipe) => (
        <Recipe
            key={recipe.id}
            name={recipe.name}
            image={recipe.image}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
        />
    ));

    return (
        <ul className={classes['recipes-list']}>
            {recipeListHTML}
        </ul>
    );
}

export default RecipeList;
