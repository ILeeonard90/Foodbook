export const createRecipie = (recipie) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => { 
        const firestore = getFirestore();
        firestore.collection('recipes').add({
            ...recipie
        }).then(() => {
            dispatch({ type: 'CREATE_RECIPIE', recipie });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })   
    }
}