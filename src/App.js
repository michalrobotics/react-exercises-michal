import { useState } from 'react';

import './App.css';
import AddRecipe from './components/NewRecipes/AddRecipe';
import Recipe from './components/Recipe/Recipe';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  //   {
  //     name: 'food',
  //     ingredients: ['avocade', 'tomato'],
  //     steps: ['mix', 'eat'],
  //     image: ''
  //   },
  //   {
  //     name: 'more food',
  //     ingredients: ['apple', 'orange'],
  //     steps: ['eat', 'mix'],
  //     image: ''
  //   },
  //   {
  //     name: 'food',
  //     ingredients: ['egg', 'rice'],
  //     steps: ['peel', 'wash'],
  //     image: ''
  //   },
  // ];

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
      {recipes.map((recipe, index) => (

        <Recipe key={'r' + index} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;
