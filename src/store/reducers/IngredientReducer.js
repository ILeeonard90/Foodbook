const initState = {
    ingredients: [
        {id: 1, title: 'meat', amount: '100g', bbf: 'janurary 2019'},
        {id: 2, title: 'pasta', amount: '250g', bbf: 'september 2020'},
        {id: 3, title: 'tomatoe sauce', amount: '500ml', bbf: 'december 2019'}
    ]
}

const IngredientReducer = (state = initState, action) => {
    return state;
}

export default IngredientReducer