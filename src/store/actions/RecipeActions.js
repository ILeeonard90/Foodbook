export const createRecipe = (recipe) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => { 
        const firestore = getFirestore();
        firestore.collection('recipes').add({
            ...recipe
        }).then(() => {
            dispatch({ type: 'CREATE_RECIPIE', recipe });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })   
    }
}