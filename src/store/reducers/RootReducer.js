import AuthReducer from './AuthReducer';
import RecipieReducer from './RecipieReducer';
import IngredientReducer from './IngredientReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const RootReducer = combineReducers({
    auth: AuthReducer,
    recipies: RecipieReducer,
    ingredients: IngredientReducer,
    firestore: firestoreReducer
});

export default RootReducer