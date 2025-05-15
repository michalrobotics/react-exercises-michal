import { useState, useEffect } from "react";
import RecipesContext from "./recipes-context";

const RecipesProvider = (props) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const savedRecipes = localStorage.getItem('recipes');

        if (savedRecipes) {
            setRecipes(JSON.parse(savedRecipes));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes])

    const addRecipeHandler = (recipe) => {
        setRecipes((prevRecipes) => {
            const newRecipe = { ...recipe, id: prevRecipes.length };
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
