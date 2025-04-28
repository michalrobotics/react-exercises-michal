import { useState } from 'react';

import './App.css';
import AddRecipe from './components/NewRecipes/AddRecipe';
import Recipe from './components/Recipe/Recipe';

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
    <div className='app'>
      <AddRecipe onAddRecipe={addRecipeHandler} />

      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;
