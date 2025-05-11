import { useContext, useEffect } from "react";

import RecipesContext from "../../store/recipes-context";
import Recipe from './Recipe';
import classes from './RecipesList.module.css';

const RecipeList = (props) => {
    const recipesCtx = useContext(RecipesContext);
    console.log("reevaluating");

    const { recipes } = recipesCtx;

    // let recipeListHTML;

    // useEffect(() => {
    //     recipeListHTML = recipes.map((recipe) => (
    //         <Recipe
    //             key={recipe.id}
    //             name={recipe.name}
    //             image={recipe.image}
    //             ingredients={recipe.ingredients}
    //             steps={recipe.steps}
    //         />
    //     ));
    //     console.log("reloading");
    // }, [recipes]);

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
