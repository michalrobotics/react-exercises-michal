import { useState } from 'react';

import AddRecipe from './components/NewRecipes/AddRecipe';
import RecipesProvider from './store/RecipesProvider';
import RecipeList from './components/Recipe/RecipesList';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipeHandler = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: recipes.length
    };

    setRecipes((prevRecipes) => (
      [...prevRecipes, newRecipe]
    ));
  }

  return (
    <RecipesProvider>
      <AddRecipe onAddRecipe={addRecipeHandler} />

      <RecipeList />
    </RecipesProvider>
  );
};

export default App;
