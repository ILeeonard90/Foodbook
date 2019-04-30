import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/dashboard/DashBoard';
import RecipesPage from './components/recipes/RecipesPage';
import RecipeDetails from './components/recipes/RecipeDetails';
import CreateRecipe from './components/recipes/CreateRecipe';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/recipe/:id' component={RecipeDetails} />
          <Route path='/recipespage' component={RecipesPage} />
          <Route path='/createrecipe' component={CreateRecipe} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
