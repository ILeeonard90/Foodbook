import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import DashBoard from './components/dashboard/DashBoard';
import RecipiesPage from './components/recipes/RecipiesPage';
import RecipieDetails from './components/recipes/RecipieDetails';
import CreateRecipie from './components/recipes/CreateRecipie';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={DashBoard} />
          <Route path='/recipie/:id' component={RecipieDetails} />
          <Route path='/recipiespage' component={RecipiesPage} />
          <Route path='/createrecipie' component={CreateRecipie} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
