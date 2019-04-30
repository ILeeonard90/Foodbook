import AuthReducer from './AuthReducer';
import RecipeReducer from './RecipeReducer';
import IngredientReducer from './IngredientReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const RootReducer = combineReducers({
    auth: AuthReducer,
    recipes: RecipeReducer,
    ingredients: IngredientReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default RootReducer