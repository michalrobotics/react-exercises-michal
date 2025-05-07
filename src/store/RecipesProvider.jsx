import RecipesContext from "./recipes-context";

const RecipesProvider = (props) => {
    const addRecipeHandler = (recipe) => {

    }

    const ctx = {
        recipes: [],
        addRecipe: addRecipeHandler
    };

    return <RecipesContext.Provider value={ctx}>
        {props.children}
    </RecipesContext.Provider>
}

export default RecipesProvider;
