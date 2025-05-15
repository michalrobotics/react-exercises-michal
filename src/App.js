import AddRecipe from './components/NewRecipes/AddRecipe';
import RecipesProvider from './store/RecipesProvider';
import RecipeList from './components/Recipe/RecipesList';

const App = () => {
  return (
    <RecipesProvider>
      <AddRecipe />
      <RecipeList />
    </RecipesProvider>
  );
};

export default App;
