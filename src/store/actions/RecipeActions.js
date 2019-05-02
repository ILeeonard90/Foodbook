export const createRecipe = (recipe) => {
    return (dispatch, getState, { getFirestore }) => { 
        const firestore = getFirestore();
        firestore.collection(getState.firebase.auth.uid).doc('private').collection('recipes').add({
            ...recipe
        }).then(() => {
            dispatch({ type: 'CREATE_RECIPIE', recipe });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })   
    }
}