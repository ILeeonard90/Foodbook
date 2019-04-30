const initState = {
    recipes: [
        {
            id:1,title: 'Burger', desription: 'tasty', ingredients: 'meat and buns', instructions: 'cook',
            notes: 'its good'
        },
        {
            id:2,title: 'Spaghetti', desription: 'very tasty', ingredients: 'pasta and sauce', instructions: 'cook pasta',
            notes: 'yeah'
        },
        {
            id:3,title: 'Fish', desription: 'healthy', ingredients: 'salmon', instructions: 'dont over cook',
            notes: 'meh'
        }

    ]
}

const RecipeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_RECIPE':
            console.log('created project ', action.recipe);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error ', action.err);
            return state;
        default:
            return state;
    }
}

export default RecipeReducer